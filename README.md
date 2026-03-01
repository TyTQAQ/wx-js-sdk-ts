# wx-js-sdk-ts

微信官方 JS-SDK 1.6.3 的 npm 完整 TypeScript 增强版本。

本项目在微信官方提供的 `jweixin-1.6.3.js` 基础上，进行了完全兼容 npm 生态库的模块化封装，并手动提供了**极度精确、强类型**的 TypeScript 声明文件（`.d.ts`）。旨在彻底解决在现代 TypeScript + Vue/React 等前端框架中调用微信 JS-SDK 时遇到的类型不安全、没有代码提示代码补全等开发痛点。

## ✨ 特性

- **支持通过 npm/yarn/pnpm 安装**：完美兼容 CommonJS 与 ESModule 环境，支持 Webpack、Vite 等现代前端打包工具。
- **100% 精确的 TypeScript 支持**：不仅补充了微信官方缺失的类型，更针对诸多 API 提供了极度精确的“字面量联合类型” (Literal Union Types)，把低级调参错误扼杀在编译阶段：
  - `jsApiList` 只允许传入真实存在的微信 API 名称字符串（如 `chooseImage`、`getLocation`）。
  - `wx.getLocation` 的 `type` 被严格限制为 `"wgs84" | "gcj02"`。
  - `showMenuItems/hideMenuItems` 的参数依据官方最新文档进行了细致的“基本类”、“传播类”、“保护类”的精细隔离校验。
  - ...更多详情可在 IDE 中通过代码悬停及提示体验。
- **全局类型注入**：支持项目内直接调用 `window.WeixinJSBridge` 等微信运行环境专属属性。

## 📦 安装

使用您最喜欢的包管理工具即可进行安装：

```bash
npm install wx-js-sdk-ts
# 或
yarn add wx-js-sdk-ts
# 或
pnpm add wx-js-sdk-ts
```

## 🔨 使用示例

在你的应用中（如 Vue / React 组件，或纯 TS 脚本中）直接引入：

```typescript
import wx from "wx-js-sdk-ts";

// 1. 注入权限验证配置 (这里如果填错了不存在的 jsApiList，TypeScript 会直接飘红提示)
wx.config({
  debug: true,
  appId: "your-app-id",
  timestamp: 1234567890,
  nonceStr: "random-string",
  signature: "sha1-signature",
  jsApiList: ["chooseImage", "getLocation", "hideMenuItems"], 
  openTagList: ["wx-open-launch-weapp"], 
});

// 2. 验证配置并执行业务逻辑
wx.ready(() => {
  console.log("微信 JS-SDK 配置成功！");

  // 以获取地理位置为例，强类型系统要求 type 只能传 wgs84 或 gcj02
  wx.getLocation({
    type: "gcj02",
    success: (res) => {
      console.log("纬度：", res.latitude);
      console.log("经度：", res.longitude);
      console.log("速度：", res.speed);
    },
    fail: (err) => {
      console.error("获取位置失败：", err.errMsg);
    },
  });

  // 以隐藏菜单为例，强类型系统自动要求你只能使用特定的保护类和传播类菜单名
  wx.hideMenuItems({
    menuList: [
      "menuItem:share:appMessage",
      "menuItem:copyUrl"
    ],
  });
});

wx.error((err) => {
  console.error("微信配置失败", err);
});
```

## 📝 支持的 API 列表

本项目完全覆盖了微信官方 1.6.3 JS-SDK 支持的所有配置及方法：
- 基础分享接口 (`updateAppMessageShareData`, `updateTimelineShareData` 等)
- 图像接口（`chooseImage`, `uploadImage`, `previewImage` 等）
- 音频与智能接口 (`playVoice`, `translateVoice` 等)
- 设备信息接口 (`getNetworkType`, `getLocation` 等)
- 界面操作与微信扫一扫 (`showMenuItems`, `scanQRCode` 等)
- 微信卡券、微信小店与微信支付 (`chooseWXPay` 等)
- 微信小程序特殊跳转动作 (`wx.miniProgram.navigateTo` 等)
- 人脸核身录制相关 API 等...

## 📄 许可证

MIT License.
