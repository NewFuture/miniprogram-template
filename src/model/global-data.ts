/**
 * it's not a good design to put global data in to App
 * use it like a module
 */
export const GlobalData = {
    userInfo: undefined as WechatMiniprogram.UserInfo | undefined,
};
