import request from "./request"
export const getOrders = (state) => {
    return request.get(`order?state=${state}`)
}
export const getOrderDetail = (orderId) => {
    return request.get(`order/${orderId}`)
}

