// app.js
App({
    onLaunch() {
        // 获取原生状态栏高度和导航栏高度
        let _this = this;
        let navBarHeightPx;
        wx.getSystemInfo({
            success(res) {
                const windowWidth = res.windowWidth;
                if (res.platform === "ios") {
                    navBarHeightPx = 44;
                } else if (res.platform === "android") {
                    navBarHeightPx = 44;
                } else {
                    navBarHeightPx = 48;
                }
                // 将px转换为rpx
                const statusBarHeight = (res.statusBarHeight * 750) / windowWidth;
                const winBarHeightRpx = (navBarHeightPx * 750) / windowWidth;
                _this.globalData.statusBarHeightRpx = statusBarHeight;
                _this.globalData.navBarHeightRpx = winBarHeightRpx;
            },
        });
    },
    globalData: {
        statusBarHeightRpx: null,
        navBarHeightRpx: null
    }
})
