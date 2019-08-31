import { GlobalData } from "/model/global-data";

//app.ts

/**
 * 认证
 */
function auth(): Promise<WechatMiniprogram.GetUserInfoSuccessCallbackResult> {
    return new Promise<WechatMiniprogram.GetUserInfoSuccessCallbackResult>((resolve, reject) => {
        wx.getUserInfo({
            success: resolve,
            fail: reject,
        });
    });
}

/**
 * 获取用户信息
 */
async function getUserInfo(): Promise<
    WechatMiniprogram.GetUserInfoSuccessCallbackResult["userInfo"]
> {
    const userInfo = await auth();
    return userInfo.userInfo;
}

App({
    onLaunch() {
        console.log("{{VERSION}}");
        // 展示本地存储能力
        const logs: number[] = wx.getStorageSync("logs") || [];
        logs.unshift(Date.now());
        wx.setStorageSync("logs", logs);
        // 登录
        wx.login({
            success(_res) {
                // JSON.stringify(this);
                console.log(_res.code);
                // setTimeout();
                // 发送 _res.code 到后台换取 openId, sessionKey, unionId
            },
        });
        // 获取用户信息
        wx.getSetting({
            success: (res) => {
                if (res.authSetting["scope.userInfo"]) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                }
            },
        });
        getUserInfo().then((res) => (GlobalData.userInfo = res));
    },
});
