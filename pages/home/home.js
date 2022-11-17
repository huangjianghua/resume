// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabid:0,//当前点击的tabBar
        tabBarItems: [
            { text: '基本信息', iconPath: '/pages/src/static/icon/default_info.png', slect_icon_path: '/pages/src/static/icon/click_info.png' },
            { text: '项目经验', iconPath: '/pages/src/static/icon/default_work.png', slect_icon_path: '/pages/src/static/icon/click_work.png' },
            { text: '专业技能', iconPath: '/pages/src/static/icon/default_skills.png', slect_icon_path: '/pages/src/static/icon/click_skills.png' },
            { text: '博客创作', iconPath: '/pages/src/static/icon/default_blog.png', slect_icon_path: '/pages/src/static/icon/click_blog.png' }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    // 切换tabBar
    switchTabBar(e) {
        const { tabid } = e.currentTarget.dataset;
        this.setData({
            tabid: tabid
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})