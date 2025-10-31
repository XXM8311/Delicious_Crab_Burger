import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getUserInfo } from '@/api/index';

export const useUserStore = defineStore('user', () => {
  // state
  const userInfo = ref({
    id: null,
    phone: '',
    userConfig: {
      nickName: '',
      avatarUrl: '',
      gender: 0,
      birthday: '',
    }
  });
  // actions
  const setUserInfo = async () => {
    try {
      const { data } = await getUserInfo();
      if (data) {
        userInfo.value = data;
      }
    } catch (error) {
      console.error('获取用户信息失败:', error);
      uni.showToast({
        title: '获取用户信息失败',
        icon: 'none'
      });
    }
  };

  const clearUserInfo = () => {
    userInfo.value = {
      id: null,
      phone: '',
      userConfig: {
        nickName: '',
        avatarUrl: '',
        gender: 0,
        birthday: '',
      }
    };
  };

  return {
    userInfo,
    setUserInfo,
    clearUserInfo
  };
});