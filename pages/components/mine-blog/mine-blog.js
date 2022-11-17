// pages/components/mine-blog/mine-blog.js
// 全局实例
const app = getApp();
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        statusBarHeightRpx: app.globalData.statusBarHeightRpx,//状态栏高度
        navBarHeightRpx: app.globalData.navBarHeightRpx,//navbar高度
        contactLists: [
            { icon: '/pages/src/static/image/github-fill.png', title: 'github', copy: 'https://github.com/huangjianghua' },
            { icon: '/pages/src/static/image/official-account.png', title: '公众号', copy: '雨说前端' },
            { icon: '/pages/src/static/image/Blog.png', title: 'blog', copy: 'https://huangjianghua.github.io/' },
            { icon: '/pages/src/static/image/csdn.png', title: 'CSDN', copy: 'https://blog.csdn.net/qq_43030820' },
            { icon: '/pages/src/static/image/link.png', title: '掘金', copy: 'https://juejin.im/user/958429870434974' },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 复制文本
        copyLink(e) {
            // 联系列表索引
            const { index } = e.currentTarget.dataset;
            // 联系列表原始数据
            const { copy } = this.data.contactLists[index];
            // 预览公众号二维码
            if (index === 1) {
                wx.previewMedia({
                    sources: [
                        { url: 'https://mmbiz.qpic.cn/mmbiz_png/fgbJtZz5YSePqRcdzytW3NiaxaiadIYVUlsfBT1Rics1psz3np1xImHVOv3WtXJW6PkSkgcLiacalSI2Wia6Bbu5qTA/0?wx_fmt=png', type: 'image' }
                    ],
                    current: 0,
                    showmenu: true,
                    success(res) {
                        console.log(res);
                    },
                    fail(res) {
                        // 复制当前点击的内容
                        wx.setClipboardData({
                            data: copy,
                            success(res) {
                                wx.getClipboardData()
                            },
                            fail() {
                                wx.showModal({
                                    title: '内容复制失败'
                                })
                            }
                        })
                    }
                })
            } else {
                // 复制当前点击的内容
                wx.setClipboardData({
                    data: copy,
                    success(res) {
                        wx.getClipboardData()
                    },
                    fail() {
                        wx.showModal({
                            title: '内容复制失败'
                        })
                    }
                })
            }

        }
    }
})
