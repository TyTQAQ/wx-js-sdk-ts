declare namespace wx {
  type JsApi =
    | "checkJsApi"
    | "updateAppMessageShareData"
    | "updateTimelineShareData"
    | "onMenuShareTimeline"
    | "onMenuShareAppMessage"
    | "onMenuShareQQ"
    | "onMenuShareWeibo"
    | "onMenuShareQZone"
    | "startRecord"
    | "stopRecord"
    | "onVoiceRecordEnd"
    | "playVoice"
    | "pauseVoice"
    | "stopVoice"
    | "onVoicePlayEnd"
    | "uploadVoice"
    | "downloadVoice"
    | "translateVoice"
    | "chooseImage"
    | "previewImage"
    | "uploadImage"
    | "downloadImage"
    | "getLocalImgData"
    | "getNetworkType"
    | "openLocation"
    | "getLocation"
    | "hideOptionMenu"
    | "showOptionMenu"
    | "closeWindow"
    | "hideMenuItems"
    | "showMenuItems"
    | "hideAllNonBaseMenuItem"
    | "showAllNonBaseMenuItem"
    | "scanQRCode"
    | "openAddress"
    | "openProductSpecificView"
    | "addCard"
    | "chooseCard"
    | "openCard"
    | "consumeAndShareCard"
    | "chooseWXPay"
    | "openEnterpriseRedPacket"
    | "startSearchBeacons"
    | "stopSearchBeacons"
    | "onSearchBeacons"
    | "openEnterpriseChat"
    | "launchMiniProgram"
    | "openBusinessView"
    | "requestFacialVerify"
    | "requestFacialVerifyAndUploadVideo";

  type OpenTag =
    | "wx-open-launch-weapp"
    | "wx-open-launch-app"
    | "wx-open-subscribe"
    | "wx-open-audio";

  interface WxConfig {
    debug?: boolean;
    appId: string;
    timestamp: number | string;
    nonceStr: string;
    signature: string;
    jsApiList: JsApi[];
    openTagList?: OpenTag[];
  }

  interface SuccessCallbackResult {
    errMsg?: string;
    [key: string]: any;
  }

  interface ErrorCallbackResult {
    errMsg: string;
    [key: string]: any;
  }

  interface CommonParams {
    success?: (res: SuccessCallbackResult | any) => void;
    fail?: (error: ErrorCallbackResult) => void;
    complete?: (res: any) => void;
    cancel?: (res: any) => void;
  }

  interface CheckJsApiParams extends CommonParams {
    jsApiList: JsApi[];
    success?: (res: {
      checkResult: Partial<Record<JsApi, boolean>>;
      errMsg: string;
    }) => void;
  }

  interface ShareTimelineParams extends CommonParams {
    title: string;
    link: string;
    imgUrl: string;
  }

  interface ShareAppMessageParams extends CommonParams {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
    type?: "music" | "video" | "link";
    dataUrl?: string;
  }
  interface CommonProgressParams extends CommonParams {
    isShowProgressTips?: number;
  }

  interface LocalIdParams extends CommonParams {
    localId: string;
  }

  interface ServerIdParams extends CommonParams {
    serverId: string;
  }

  interface LocalIdProgressParams extends LocalIdParams, CommonProgressParams {}
  interface ServerIdProgressParams
    extends ServerIdParams, CommonProgressParams {}

  interface StopRecordParams extends CommonParams {
    success?: (res: { localId: string }) => void;
  }

  interface OnVoiceRecordEndParams extends CommonParams {
    complete?: (res: { localId: string }) => void;
  }

  interface PlayVoiceParams extends LocalIdParams {}
  interface PauseVoiceParams extends LocalIdParams {}
  interface StopVoiceParams extends LocalIdParams {}

  interface OnVoicePlayEndParams extends CommonParams {
    success?: (res: { localId: string }) => void;
  }

  interface UploadVoiceParams extends LocalIdProgressParams {}
  interface DownloadVoiceParams extends ServerIdProgressParams {}

  interface TranslateVoiceParams extends LocalIdProgressParams {
    success?: (res: { translateResult: string }) => void;
  }

  type ImageSizeType = "original" | "compressed";
  type ImageSourceType = "album" | "camera";

  interface ChooseImageParams extends CommonParams {
    count?: number;
    sizeType?: ImageSizeType[];
    sourceType?: ImageSourceType[];
    success?: (res: {
      localIds: string[];
      sourceType: string;
      errMsg: string;
    }) => void;
  }

  interface PreviewImageParams extends CommonParams {
    current: string;
    urls: string[];
  }

  interface UploadImageParams extends LocalIdProgressParams {
    success?: (res: { serverId: string }) => void;
  }

  interface DownloadImageParams extends ServerIdProgressParams {
    success?: (res: { localId: string }) => void;
  }

  interface GetLocalImgDataParams extends LocalIdParams {
    success?: (res: { localData: string }) => void;
  }

  type NetworkType = "2g" | "3g" | "4g" | "wifi";

  interface GetNetworkTypeParams extends CommonParams {
    success?: (res: { networkType: NetworkType }) => void;
  }

  interface OpenLocationParams extends CommonParams {
    latitude: number;
    longitude: number;
    name?: string;
    address?: string;
    scale?: number;
    infoUrl?: string;
  }

  interface GetLocationParams extends CommonParams {
    type?: "wgs84" | "gcj02";
    success?: (res: {
      latitude: number;
      longitude: number;
      speed: number;
      accuracy: number;
    }) => void;
  }

  // 基本类
  type BasicMenuItem =
    | "menuItem:exposeArticle" // 举报
    | "menuItem:setFont" // 调整字体
    | "menuItem:dayMode" // 日间模式
    | "menuItem:nightMode" // 夜间模式
    | "menuItem:refresh" // 刷新
    | "menuItem:profile" // 查看公众号（已添加）
    | "menuItem:addContact"; // 查看公众号（未添加）

  // 传播类
  type ShareMenuItem =
    | "menuItem:share:appMessage" // 发送给朋友
    | "menuItem:share:timeline" // 分享到朋友圈
    | "menuItem:share:qq" // 分享到QQ
    | "menuItem:share:weiboApp" // 分享到Weibo
    | "menuItem:favorite" // 收藏
    | "menuItem:share:facebook" // 分享到FB
    | "menuItem:share:QZone"; // 分享到 QQ 空间

  // 保护类
  type ProtectMenuItem =
    | "menuItem:editTag" // 编辑标签
    | "menuItem:delete" // 删除
    | "menuItem:copyUrl" // 复制链接
    | "menuItem:originPage" // 原网页
    | "menuItem:readMode" // 阅读模式
    | "menuItem:openWithQQBrowser" // 在QQ浏览器中打开
    | "menuItem:openWithSafari" // 在Safari中打开
    | "menuItem:share:email" // 邮件
    | "menuItem:share:brand"; // 一些特殊公众号

  type MenuItem = BasicMenuItem | ShareMenuItem | ProtectMenuItem;

  interface HideMenuItemsParams extends CommonParams {
    menuList: Array<ShareMenuItem | ProtectMenuItem>;
  }

  interface ShowMenuItemsParams extends CommonParams {
    menuList: MenuItem[];
  }

  type ScanType = "qrCode" | "barCode";

  interface ScanQRCodeParams extends CommonParams {
    needResult?: 0 | 1;
    scanType?: ScanType[];
    success?: (res: { resultStr: string }) => void;
  }

  interface OpenAddressParams extends CommonParams {
    success?: (res: {
      userName: string;
      postalCode: string;
      provinceName: string;
      cityName: string;
      countryName: string;
      detailInfo: string;
      nationalCode: string;
      telNumber: string;
    }) => void;
  }

  interface OpenProductSpecificViewParams extends CommonParams {
    productId: string;
    viewType?: "0" | "1" | "2" | 0 | 1 | 2;
    extInfo?: string;
  }

  interface AddCardParams extends CommonParams {
    cardList: Array<{ cardId: string; cardExt: string }>;
    success?: (res: { cardList: string[] }) => void;
  }

  interface ChooseCardParams extends CommonParams {
    shopId?: string;
    cardType?: string;
    cardId?: string;
    timestamp: number;
    nonceStr: string;
    signType?: string;
    cardSign: string;
    success?: (res: { cardList: string[] }) => void;
  }

  interface OpenCardParams extends CommonParams {
    cardList: Array<{ cardId: string; code: string }>;
  }

  interface ConsumeAndShareCardParams extends CommonParams {
    cardId: string;
    code: string;
  }

  interface ChooseWXPayParams extends CommonParams {
    timestamp: number;
    nonceStr: string;
    package: string;
    signType?: string;
    paySign: string;
    success?: (res: any) => void;
  }

  interface StartSearchBeaconsParams extends CommonParams {
    ticket: string;
  }

  interface OnSearchBeaconsParams extends CommonParams {
    complete?: (res: any) => void;
  }

  interface OpenEnterpriseChatParams extends CommonParams {
    userIds: string;
    groupName: string;
  }

  interface LaunchMiniProgramParams extends CommonParams {
    targetAppId: string;
    path?: string;
    envVersion?: "release" | "develop" | "trial";
  }

  interface OpenBusinessViewParams extends CommonParams {
    businessType: string;
    queryString?: string;
    envVersion?: string;
  }

  interface NavigateBackParams extends CommonParams {
    delta?: number;
  }

  interface NavigateToParams extends CommonParams {
    url: string;
  }

  interface PostMessageParams extends CommonParams {
    data: any;
  }

  interface RequestFacialVerifyParams extends CommonParams {
    appId: string;
    verifyId: string;
  }

  function config(conf: WxConfig): void;
  function ready(callback: () => void): void;
  function error(callback: (err: any) => void): void;
  function checkJsApi(params: CheckJsApiParams): void;
  function updateAppMessageShareData(params: ShareAppMessageParams): void;
  function updateTimelineShareData(params: ShareTimelineParams): void;
  function onMenuShareTimeline(params: ShareTimelineParams): void;
  function onMenuShareAppMessage(params: ShareAppMessageParams): void;
  function onMenuShareQQ(params: ShareAppMessageParams): void;
  function onMenuShareWeibo(params: ShareAppMessageParams): void;
  function onMenuShareQZone(params: ShareAppMessageParams): void;
  function startRecord(params?: CommonParams): void;
  function stopRecord(params: StopRecordParams): void;
  function onVoiceRecordEnd(params: OnVoiceRecordEndParams): void;
  function playVoice(params: PlayVoiceParams): void;
  function pauseVoice(params: PauseVoiceParams): void;
  function stopVoice(params: StopVoiceParams): void;
  function onVoicePlayEnd(params: OnVoicePlayEndParams): void;
  function uploadVoice(params: UploadVoiceParams): void;
  function downloadVoice(params: DownloadVoiceParams): void;
  function translateVoice(params: TranslateVoiceParams): void;
  function chooseImage(params: ChooseImageParams): void;
  function previewImage(params: PreviewImageParams): void;
  function uploadImage(params: UploadImageParams): void;
  function downloadImage(params: DownloadImageParams): void;
  function getLocalImgData(params: GetLocalImgDataParams): void;
  function getNetworkType(params: GetNetworkTypeParams): void;
  function openLocation(params: OpenLocationParams): void;
  function getLocation(params: GetLocationParams): void;
  function hideOptionMenu(params?: CommonParams): void;
  function showOptionMenu(params?: CommonParams): void;
  function closeWindow(params?: CommonParams): void;
  function hideMenuItems(params: HideMenuItemsParams): void;
  function showMenuItems(params: ShowMenuItemsParams): void;
  function hideAllNonBaseMenuItem(params?: CommonParams): void;
  function showAllNonBaseMenuItem(params?: CommonParams): void;
  function scanQRCode(params: ScanQRCodeParams): void;
  function openAddress(params: OpenAddressParams): void;
  function openProductSpecificView(params: OpenProductSpecificViewParams): void;
  function addCard(params: AddCardParams): void;
  function chooseCard(params: ChooseCardParams): void;
  function openCard(params: OpenCardParams): void;
  function consumeAndShareCard(params: ConsumeAndShareCardParams): void;
  function chooseWXPay(params: ChooseWXPayParams): void;
  function openEnterpriseRedPacket(params: CommonParams): void;
  function startSearchBeacons(params: StartSearchBeaconsParams): void;
  function stopSearchBeacons(params?: CommonParams): void;
  function onSearchBeacons(params: OnSearchBeaconsParams): void;
  function openEnterpriseChat(params: OpenEnterpriseChatParams): void;
  function launchMiniProgram(params: LaunchMiniProgramParams): void;
  function openBusinessView(params: OpenBusinessViewParams): void;
  function requestFacialVerify(params: RequestFacialVerifyParams): void;
  function requestFacialVerifyAndUploadVideo(
    params: RequestFacialVerifyParams,
  ): void;
  namespace miniProgram {
    function navigateBack(params?: NavigateBackParams): void;
    function navigateTo(params: NavigateToParams): void;
    function redirectTo(params: NavigateToParams): void;
    function switchTab(params: NavigateToParams): void;
    function reLaunch(params: NavigateToParams): void;
    function postMessage(params: PostMessageParams): void;
    function getEnv(callback: (res: { miniprogram: boolean }) => void): void;
  }
}

declare function wx(): void;

declare global {
  interface Window {
    WeixinJSBridge: any;
    __wxjs_environment: any;
  }
  const WeixinJSBridge: any;
}

export default wx;
