# 美味蟹堡点餐小程序

一款基于 uni-app 开发的移动端点餐应用，支持微信小程序等多端运行。提供完整的点餐、购物车、订单管理等核心功能。

## 📱 项目简介

美味蟹堡点餐小程序是一个完整的餐饮点餐解决方案，用户可以浏览商品、添加购物车、下单支付并管理订单。应用支持堂食和自提两种点餐方式，提供流畅的用户体验。

## ✨ 主要功能

### 用户系统
- ✅ 用户注册/登录（支持密码登录和验证码登录）
- ✅ 个人信息管理（头像、昵称、性别、生日）
- ✅ 密码修改
- ✅ 账户注销
- ✅ 退出登录

### 商品浏览
- ✅ 首页轮播图展示
- ✅ 点餐方式选择（堂食/自提）
- ✅ 分类菜单浏览
- ✅ 商品列表展示（价格、描述、图片）
- ✅ 商品详情页面
- ✅ 实时搜索和筛选

### 购物车
- ✅ 添加商品到购物车
- ✅ 购物车商品数量管理
- ✅ 购物车商品删除
- ✅ 购物车总价计算
- ✅ 购物车详情弹窗

### 订单管理
- ✅ 订单确认页面
- ✅ 订单提交
- ✅ 订单列表（支持按状态筛选：全部/待支付/制作中/已完成/已取消）
- ✅ 订单详情查看
- ✅ 订单支付
- ✅ 订单取消
- ✅ 订单备注功能

### 个人中心
- ✅ 用户信息展示
- ✅ 账户管理
- ✅ 联系客服
- ✅ 关于我们

## 🛠 技术栈

- **框架**: uni-app (Vue 3)
- **状态管理**: Pinia
- **UI 组件库**: uview-plus
- **样式预处理**: Sass
- **构建工具**: Vite

## 📁 项目结构

```
Delicious_Crab_Burger/
├── api/                  # API 接口文件
│   ├── request.js       # 请求封装
│   ├── index.js         # 接口统一导出
│   ├── home.js          # 首页接口
│   ├── user.js          # 用户接口
│   ├── meal.js          # 商品接口
│   └── order.js         # 订单接口
├── components/          # 公共组件
│   └── ShoppingCart.vue # 购物车组件
├── pages/               # 页面文件
│   ├── login/          # 登录页
│   ├── register/       # 注册页
│   ├── index/          # 首页
│   ├── meals/          # 商品列表页
│   ├── mealDetail/     # 商品详情页
│   ├── checkout/       # 订单确认页
│   ├── order/          # 订单列表页
│   ├── orderDetail/    # 订单详情页
│   └── mine/           # 个人中心页
├── stores/             # 状态管理
│   ├── cart.js         # 购物车状态
│   └── user.js         # 用户状态
├── static/             # 静态资源
├── utils/              # 工具函数
├── uni_modules/        # uni-app 插件
├── App.vue             # 应用入口
├── main.js             # 主入口文件
├── pages.json          # 页面配置
└── manifest.json       # 应用配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 14.x
- HBuilderX 或 微信开发者工具

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm
pnpm install
```

### 配置

1. 配置 API 基础地址：在 `api/request.js` 中修改 `baseURL` 和 `imgBaseURL`

```javascript
export const baseURL = 'http://your-api-domain:port/xxm/v1/'
export const imgBaseURL = 'http://your-api-domain:port/image/'
```

2. 配置小程序 AppID：在 `manifest.json` 中修改 `mp-weixin.appid`

```json
{
  "mp-weixin": {
    "appid": "your-appid"
  }
}
```

### 运行项目

```bash
# 开发环境运行
npm run dev:mp-weixin

# 构建生产版本
npm run build:mp-weixin
```

在 HBuilderX 中：
1. 打开项目
2. 选择运行 -> 运行到小程序模拟器 -> 微信开发者工具

## 📋 核心功能说明

### 购物车功能

使用 Pinia 管理购物车状态，支持：
- 添加/删除商品
- 修改商品数量
- 计算总价和总数量
- 清空购物车

### 订单流程

1. 用户在商品页面选择商品并加入购物车
2. 在购物车中确认商品信息
3. 跳转到订单确认页选择点餐方式（堂食/自提）
4. 填写订单备注（可选）
5. 提交订单并支付
6. 在订单列表查看订单状态

### 用户认证

- 使用 JWT Token 进行身份认证
- Token 存储在本地存储中
- 请求时自动携带 Token

## 🎨 UI 设计

- 采用现代化的 UI 设计风格
- 支持自定义导航栏
- 响应式布局，适配不同屏幕尺寸
- 流畅的页面转场动画

## 📱 页面说明

| 页面 | 路径 | 说明 |
|------|------|------|
| 登录页 | `/pages/login/login` | 支持密码登录和验证码登录 |
| 注册页 | `/pages/register/register` | 新用户注册 |
| 首页 | `/pages/index/index` | 轮播图和点餐方式选择 |
| 商品列表 | `/pages/meals/meals` | 分类菜单和商品列表 |
| 商品详情 | `/pages/mealDetail/mealDetail` | 商品详细信息 |
| 订单确认 | `/pages/checkout/checkout` | 确认订单信息并提交 |
| 订单列表 | `/pages/order/order` | 查看所有订单 |
| 订单详情 | `/pages/order/orderDetail` | 订单详细信息 |
| 个人中心 | `/pages/mine/mine` | 用户信息和设置 |

## 🔧 开发说明

### 状态管理

使用 Pinia 进行状态管理：

- `stores/cart.js`: 管理购物车状态
- `stores/user.js`: 管理用户信息状态

### API 请求

所有 API 请求统一封装在 `api/request.js` 中，支持：
- GET/POST/PUT/PATCH/DELETE 方法
- 自动添加 Token 认证
- 统一错误处理
- Loading 状态管理

### 组件使用

主要使用的组件库：
- uview-plus: 提供丰富的 UI 组件
- uni-popup: 弹窗组件
- uni-datetime-picker: 日期选择器

## 📦 构建部署

### 微信小程序

1. 执行构建命令生成小程序代码
2. 使用微信开发者工具打开 `unpackage/dist/dev/mp-weixin` 目录
3. 上传代码并提交审核

### 其他平台

项目支持编译到多个平台：
- 微信小程序
- H5
- APP
- 其他小程序平台





## 📄 许可证

⚠️ 本项目仅供个人学习与研究使用。
请勿将本项目用于任何商业用途或违法用途。
若产生法律纠纷，作者不承担任何责任。



**版本**: 1.0.0  
**最后更新**: 2024

# Delicious_Crab_Burger
