const request = {
	http(url,method,data,loading=true){
		if(loading){
			uni.showLoading({
				title:"正在加载"
			})
		}
		let header = {
			"Authorization" : uni.getStorageSync("token") || " "
		}
		return new Promise((resolve,reject)=>{
			uni.request({
				// 注意：请配置正确的 API 地址，或使用 api/request.js 中的统一配置
				url:`http://your-api-domain:port/xxm/v1`+url,
				data,
				header,
				method,
				success(res) {
				return	resolve	(res.data)
				},
				fail(err) {
					return reject(err)
				},
				complete() {
					uni.hideLoading()
				}
			})
		})
	},
	//
	 get(url,data,loading=true){
		return  request.http(url,"GET",data)
	},
	 post(url,data,loading=true){
		return  request.http(url,"POST",data)
	},
	 patch(url,data,loading=true){
		return  request.http(url,"PATCH",data)
	},
	 remove(url,data,loading=true){
		return  request.http(url,"DELETE",data)
	}
}
export default request