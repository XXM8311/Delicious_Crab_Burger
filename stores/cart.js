import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // 状态
  const cartItems = ref([])

  // 计算属性
  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  })

  const totalQuantity = computed(() => {
    return cartItems.value.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  })

  // 方法
  const addToCart = (meal) => {
    const existingItem = cartItems.value.find(item => item.id === meal.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({
        id: meal.id,
        name: meal.name,
        price: meal.price,
        image: meal.placardImage,
        quantity: meal.quantity>1?meal.quantity:1
      })
    }
    return true
  }

  const removeFromCart = (mealId) => {
    const index = cartItems.value.findIndex(item => item.id === mealId)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  const updateQuantity = (mealId, quantity) => {
    const item = cartItems.value.find(item => item.id === mealId)
    if (item) {
      if (quantity < 1) {
        uni.showToast({
          title: '数量不能小于1',
          icon: 'none'
        })
        return false
      }
      item.quantity = quantity
      return true
    }
    return false
  }

  const clearCart = () => {
    cartItems.value = []
  }

  return {
    cartItems,
    totalPrice,
    totalQuantity,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}) 