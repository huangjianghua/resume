// pages/components/base-info/base-info.js
// 全局实例
const app = getApp();
// 自我评价列表
const selfAssessment =
    `<div class="rich-text">
    <ol style="margin:0;padding:0;">
    <li>性格乐观、做事稳重，兴趣爱好广泛，喜欢绘画和摄影具有较好的审美观，喜欢不断学习和探索新事物。</li>
    <li>责任心强、善于沟通、能较快适应环境。</li>
    <li>勇于不断迎接新的挑战，具备很强的事业心和与团队协作精神，相信自己的加入会给企业或公司创造更高的价值。</li>
</ol>
</div>
`
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
        personalInfo: {//个人信息
            avatar:'https://mmbiz.qpic.cn/mmbiz_jpg/fgbJtZz5YSfN3wWeEC8XowtCJneouRasHO1lgLLiay0bNKfzic5jxWU4jFTP9ibsQI1s8lvfmMXvp7nJ1mGvP7w9g/0?wx_fmt=jpeg',
            name: 'Mr Huang',
            age: "25岁",
            sex: '男',
            work: '1年工作经验',
            schoolBackground: '本科',
            tel: '18708859810',
            email: '2446875775@qq.com',
            address: '云南-普洱',
            selfAssessment: selfAssessment
        },
        // 联系相关列表
        contactLists: [
            { title: '添加微信', icon: '/pages/src/static/image/weixin.png' },
            { title: '拨打电话', icon: '/pages/src/static/image/call.png' },
            { title: '保存电话', icon: '/pages/src/static/image/phone.png' },
        ],
        // 教育背景相关列表
        educationLists: [
            { title: '昆明理工大学（本科）', icon: '/pages/src/static/image/school.png' },
            { title: '测绘工程', icon: '/pages/src/static/image/other.png' },
            // { title: '2016-2021', icon: '/pages/src/static/image/time.png' },
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 联系信息事件
        selectContact(e) {
            // 获取当前点击的下标
            const { contactid } = e.currentTarget.dataset;
            if (contactid === 0) {//添加微信
                wx.previewMedia({
                    sources: [
                        { url: 'https://mmbiz.qpic.cn/mmbiz_jpg/fgbJtZz5YSfN3wWeEC8XowtCJneouRask7I8CGTgLvLw9Zev8Wqr1ka011CGUJicQOUeFKibiaSU5SYeSwU49UbKg/0?wx_fmt=jpeg', type: 'image' }
                    ],
                    current: 0,
                    showmenu: true,
                    success(res) {
                    },
                    fail(res) {
                        // 复制当前点击的内容
                        wx.showToast({
                            title: '虽然你没有添加我，但是我已经记住你了。😂',
                            icon: 'none'
                        })
                    }
                })
            } else if (contactid === 1) {//拨打电话
                wx.makePhoneCall({
                    phoneNumber: '18708859810',
                    fail(err) {
                        wx.showToast({
                            title: '虽然你没有call我，但是我已经记住你了。😂',
                            icon: 'none'
                        })
                    }
                })
            } else {//保存电话
                wx.addPhoneContact({
                    photoFilePath: '/pages/src/static/icon/click_info.png',
                    nickName: '三叶雨',
                    lastName: 'huang',
                    firstName: '左手测绘右手代码',
                    remark: '前端工程师',
                    mobilePhoneNumber: '18708859810', //手机号
                    weChatNumber: 'hjh2446875775',
                    addressCountry: 'china',
                    email: '2446875775@qq.com',
                    success: function () {
                        wx.showModal({
                            title: '握手🤼‍♀️',
                            content: '感谢在茫茫人海中遇见你',
                            showCancel: false,
                            cancelText: "确定"
                        })
                    },
                    fail: function () {
                        wx.showToast({
                            title: '虽然你没有将我保存下来，但是我已经记住你了。😂',
                            icon: 'none'
                        })
                    }
                })
            }
        },
        // 教育信息列表相关事件
        selectEducat(e) {
            // 获取当前点击的下标
            const { educatid } = e.currentTarget.dataset;
            if (educatid === 0) {
                wx.previewMedia({
                    sources: [
                        { url: 'https://mmbiz.qpic.cn/mmbiz_jpg/fgbJtZz5YSdlprMqJBLFlhMorxfphyT6CFvcXr5GssKZt5pGVyxy6xbmLl0vuefQiamaqVdHSzlewdS72RsU8Xw/0?wx_fmt=jpeg', type: 'image' },
                        { url: 'https://mmbiz.qpic.cn/mmbiz_jpg/fgbJtZz5YSdlprMqJBLFlhMorxfphyT6pZG1hbashM8MEibyNxX3IEoAoibian9wg0l9YD1BKJWEZxIpbxxhaclRw/0?wx_fmt=jpeg', type: 'image' },
                        { url: 'https://mmbiz.qpic.cn/mmbiz_jpg/fgbJtZz5YSdlprMqJBLFlhMorxfphyT6Qcfkl5UpwTQib8ygOQGxFDdq0nRVu2usxtVagOqS7NwRBru90EXOQIg/0?wx_fmt=jpeg', type: 'image' },
                        { url: 'https://mmbiz.qpic.cn/mmbiz_jpg/fgbJtZz5YSdlprMqJBLFlhMorxfphyT64IHUvIMBZsDEx2grt1ZbTgahFtWmiaNxr1L5pydqhHfMsjibRjqINXPw/0?wx_fmt=jpeg', type: 'image' },
                        { url: 'https://mmbiz.qpic.cn/mmbiz_jpg/fgbJtZz5YSdlprMqJBLFlhMorxfphyT6NibXwMw57UHaLJbzIq8ZteXZUYUsUZKicbaMt3rBZ1tA4Zeo9ZUkAyJg/0?wx_fmt=jpeg', type: 'image' },
                    ],
                    current: 0,
                    showmenu: true,
                    success(res) {
                    },
                    fail(res) {
                        // 复制当前点击的内容
                        wx.showToast({
                            title: '打开图片失败',
                            icon: 'none'
                        })
                    }
                })
            }else if (educatid===1) {
                wx.showToast({
                  title: '测绘是一门神奇的学科，三年入门，五年入土。😜',
                  icon:'none'
                })
            }else{
                wx.showToast({
                    title: '这是一个难忘的数字，也是最美好的时光。🍀',
                    icon:'none'
                  })
            }
        }
    }
})
