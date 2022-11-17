// pages/components/custom-nav-bar/custom-nav-bar.js
// 全局实例
const app = getApp();
Component({
    /**
    * 配置列表
    */
    options: {
        // 设置多个slot
        multipleSlots: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        /**
       * 设置中间内容的样式(从父组件中设置)
       */
        style: {
            type: String
        },
        /**
         * 当左侧按钮设置为其他事件时。(默认为返回事件)
         */
        isCustomEv: Boolean,
        /**
        * 设置中间内容右下角的三角形/同时中间内容背景存在hover
        */
        isTriangle: {
            type: Boolean
        },
        // navbar左侧图标的颜色
        lIconColor: {
            type: String
        },
        // navbar左侧图标的大小
        lIconSize: {
            type: Number
        },
        // navbar左侧图标的类型
        lIconType: {
            type: String
        },
        // navbar的标题
        title: {
            type: String
        },
        // 右侧的图标
        rightIcon: {
            type: String
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        statusBarHeightRpx: app.globalData.statusBarHeightRpx,//状态栏高度
        navBarHeightRpx: app.globalData.navBarHeightRpx,//navbar高度
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 点击navbar左侧的传递事件
        navBtnTo() {
            // 如果为自定义事件时
            if (this.data.isCustomEv) {
                this.triggerEvent('customEvEmit')
                // 默认事件
            } else {
                wx.navigateBack({
                    delta: 1
                })
            }
        },
        // 点击navbar中间内容的传递事件
        navMiddleToEmit() {
            this.triggerEvent('navMiddleToEmit')
        }
    }
})
