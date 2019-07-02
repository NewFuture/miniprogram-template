//index.js
//获取应用实例
import { GlobalData } from "/model/global-data";

Page({
    data: {
        motto: "点击 “编译” 以构建",
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
    },
    //事件处理函数
    bindViewTap() {
        wx.navigateTo({
            url: "../logs/logs",
        });
    },
    onLoad() {
        if (GlobalData.userInfo) {
            this.setData({
                userInfo: GlobalData.userInfo,
                hasUserInfo: true,
            });
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: (res) => {
                    GlobalData.userInfo = res.userInfo;
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    });
                },
            });
        }
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUserInfo(e: any) {
        // console.log(e);
        GlobalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
