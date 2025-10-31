import request from './request'

// 登录
export const login = (data) => {
    return request.post('user/miniProgram/login', data)
}

// 发送验证码
export const sendCode = (phone) => {
    return request.get(`verificationCode?phone=${phone}`)
}

// 验证码登录
export const loginByCode = (data) => {
    return request.post('user/miniProgram/loginByPhone', data)
}

// 注册
export const register = (data) => {
    return request.post('user/miniProgram/register', data)
}
 
//获取个人信息
export const getUserInfo = () => {
   return request.get('user/miniProgram/getUserInfo')
}

// 更新个人信息
export const updateUserInfo = (data) => {
    return request.patch('user/miniProgram/updateUserInfo',data)
}
export const updatePassword = (data) => {
    return request.post('user/miniProgram/updatePassword',data)
}
// 退出登录
export const logout = () => {
    return request.post('user/miniProgram/loginOut')
}
// 注销账户
export const singOut = () => {
    return request.post('user/miniProgram/singOut')
}

