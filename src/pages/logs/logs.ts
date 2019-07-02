//logs.js
import { formatTime } from "/utils/date"; //支持绝对路径

Page({
    data: {
        logs: [] as string[],
    },
    onLoad() {
        this.setData({
            logs: (wx.getStorageSync("logs") || []).map((log: number) => {
                return formatTime(new Date(log));
            }),
        });
    },
});
