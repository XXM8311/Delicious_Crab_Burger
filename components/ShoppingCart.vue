<template>
  <view class="shopping-cart">
    <view class="cart-content">
      <view class="cart-icon" @click="showCartDetail">
        <image src="/static/images/meal/bag.png" />
        <view v-if="totalQuantity > 0" class="badge">{{ totalQuantity }}</view>
      </view>
      <view class="price-info">
        <text class="total-price" v-if="totalPrice > 0">¥{{ totalPrice }}</text>
        <text class="empty-text" v-else>购物车是空的</text>
      </view>
      <button 
        class="checkout-btn" 
        :class="{ active: totalPrice > 0 }"
        @click="handleCheckout"
      >
        去结算
      </button>
    </view>

    <!-- 购物车详情弹窗 -->
    <uni-popup ref="popup" type="bottom">
      <view class="cart-detail">
        <view class="cart-header">
          <text class="title">购物车</text>
          <text class="clear" @click="handleClear">清空</text>
        </view>
        <scroll-view scroll-y class="cart-list">
          <view 
            class="cart-item" 
            v-for="item in cartItems" 
            :key="item.id"
          >
            <image :src="imgBaseURL + item.image" class="item-image" />
            <view class="item-info">
              <text class="item-name">{{ item.name }}</text>
              <text class="item-price">¥{{ item.price }}</text>
            </view>
            <view class="quantity-control">
              <text class="minus" @click="updateQuantity(item.id, item.quantity - 1)">-</text>
              <text class="quantity">{{ item.quantity }}</text>
              <text class="plus" @click="updateQuantity(item.id, item.quantity + 1)">+</text>
            </view>
          </view>
        </scroll-view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useCartStore } from '@/stores/cart';
import { imgBaseURL } from '@/api/request';
const props = defineProps({
  diningType: {
    type: String,
    default: 'dineIn'
  }
});
const cartStore = useCartStore();
const popup = ref(null);

// 使用计算属性获取购物车数据
const cartItems = computed(() => cartStore.cartItems);
const totalPrice = computed(() => cartStore.totalPrice);
const totalQuantity = computed(() => cartStore.totalQuantity);

// 显示购物车详情
const showCartDetail = () => {
  if (totalQuantity.value > 0) {
    popup.value.open();
  }
};

// 更新商品数量
const updateQuantity = (id, quantity) => {
  cartStore.updateQuantity(id, quantity);
};

// 清空购物车
const handleClear = () => {
  uni.showModal({
    title: '提示',
    content: '确定要清空购物车吗？',
    success: (res) => {
      if (res.confirm) {
        cartStore.clearCart();
        popup.value.close();
      }
    }
  });
};

// 去结算
const handleCheckout = () => {  
  if (totalPrice.value > 0) {
    uni.navigateTo({
      url: `/pages/checkout/checkout?type=${props.diningType}`
    });
  }
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.cart-content {
  display: flex;
  align-items: center;
  padding: 20rpx;
  height: 100rpx;
}

.cart-icon {
  position: relative;
  margin-right: 20rpx;
  
  image {
    width: 100rpx;
    height: 130rpx;
  }
  
  .badge {
    position: absolute;
    top: -10rpx;
    right: -10rpx;
    background-color: #e74c3c;
    color: #fff;
    font-size: 20rpx;
    padding: 4rpx 10rpx;
    border-radius: 20rpx;
    min-width: 30rpx;
    text-align: center;
  }
}

.price-info {
  flex: 1;
  
  .total-price {
    font-size: 36rpx;
    font-weight: bold;
    color: #e74c3c;
  }
  
  .empty-text {
    font-size: 28rpx;
    color: #999;
  }
}

.checkout-btn {
  width: 200rpx;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  background-color: #999;
  color: #fff;
  border-radius: 40rpx;
  font-size: 28rpx;
  margin: 0;
  
  &.active {
    background-color: #e74c3c;
  }
}

.cart-detail {
  background-color: #fff;
  border-radius: 20rpx 20rpx 0 0;
  padding: 30rpx;
  max-height: 60vh;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
  
  .title {
    font-size: 32rpx;
    font-weight: bold;
  }
  
  .clear {
    font-size: 26rpx;
    color: #999;
  }
}

.cart-list {
  max-height: calc(60vh - 100rpx);
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f5f5f5;
  
  .item-image {
    width: 100rpx;
    height: 100rpx;
    border-radius: 8rpx;
    margin-right: 20rpx;
  }
  
  .item-info {
    flex: 1;
    
    .item-name {
      font-size: 28rpx;
      color: #333;
      margin-bottom: 10rpx;
    }
    
    .item-price {
      font-size: 32rpx;
      color: #e74c3c;
      font-weight: bold;
    }
  }
}

.quantity-control {
  display: flex;
  align-items: center;
  
  .minus, .plus {
    width: 50rpx;
    height: 50rpx;
    line-height: 50rpx;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 25rpx;
  }
  
  .quantity {
    margin: 0 20rpx;
    font-size: 28rpx;
  }
}
</style> 