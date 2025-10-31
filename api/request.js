// 请配置你的 API 地址
// 方式一：直接修改下面的地址（推荐用于快速配置）
// 方式二：在本地创建 api/config.local.js 文件（不会被提交到版本库）
//         示例：export const baseURL = 'http://your-api-domain:port/xxm/v1/'

// 默认配置（请替换为你的实际 API 地址）
export const baseURL = 'http://your-api-domain:port/xxm/v1/'
export const imgBaseURL = 'http://your-api-domain:port/image/'

// 如果有本地配置文件，会优先使用本地配置（需要在构建时处理）
// 注意：config.local.js 已在 .gitignore 中，不会被提交到版本库
 const request = {
    // 基础请求方法
    http(url, method, data, loading = true) {
        if (loading) {
            uni.showLoading({
                title: "加载中..."
            })
        }

        let header = {
            'Content-Type': 'application/json',
            "Authorization":'Bearer ' + uni.getStorageSync("token") || " "
        }

        return new Promise((resolve, reject) => {
            uni.request({
                url: baseURL + url,
                data,
                header,
                method,
                success(res) {
                    if (res.statusCode>=200 && res.statusCode<300) {
                        resolve(res.data)
                    } else {
                        uni.showToast({
                            title: res.data.message || '请求失败',
                            icon: 'none'
                        })
                        reject(res)
                    }
                },
                fail(err) {
                    uni.showToast({
                        title: '网络错误',
                        icon: 'none'
                    })
                    reject(err)
                },
                complete() {
                    if (loading) {
                        uni.hideLoading()
                    }
                }
            })
        })
    },

    // 便捷方法
    get(url, data, loading = true) {
        return this.http(url, "GET", data, loading)
    },

    post(url, data, loading = true) {
        return this.http(url, "POST", data, loading)
    },

    put(url, data, loading = true) {
        return this.http(url, "PUT", data, loading)
    },

    delete(url, data, loading = true) {
        return this.http(url, "DELETE", data, loading)
    },

    patch(url, data, loading = true) {
        return this.http(url, "PATCH", data, loading)
    }
}

export default request 