import request from "./request"
export const getMeals = () => {
    return request.get('category')
}
export const createOrder = (data) => {
    return request.post('order',data)
}
export const updateOrder = (data) => {
    return request.patch('order',data)
}
