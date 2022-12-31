// pages/components/base-work/base-work.js
// 引入echarts图表库
import * as echarts from "../../../ec-canvas/echarts.min";
// 引入各APP技术栈数据
import {
    skillPageData,
    pageStructureData,
} from "../../src/static/common/echart-option-data.js";
// 全局实例
const app = getApp();
// 饼图图表配置
function setOptionPie(chart, data) {
    let option = {
        legend: {
            top: "bottom",
        },
        toolbox: {
            show: true,
        },
        series: [
            {
                name: "Area Echarts", //图表名称
                type: "pie",
                radius: ["10%", "60%"],
                // roseType: "radius",//
                avoidLabelOverlap: true, //是否启用防止标签重叠策略
                // top: "top",
                bottom: "25%",
                animationType: "expansion", //初始动画效果
                animation: true,
                animationDuration: 3000,
                animationDurationUpdate: 3000,
                itemStyle: {
                    borderRadius: 5,
                    borderWidth: 2,
                },
                label: {
                    //标签配置
                    show: true,
                    position: "outside",
                    textBorderColor: "rgba(230, 22, 22, 1)",
                    textShadowColor: "#8d8d8db4",
                    textShadowBlur: 2,
                    textShadowOffsetX: 3,
                    textShadowOffsetY: 1,
                    edgeDistance: 10,
                    bleedMargin: 10,
                },
                labelLine: {
                    //标签线配置
                    show: true,
                    showAbove: true,
                    length: 6,
                    smooth: true,
                },
                emphasis: {
                    label: {
                        //选中高亮配置
                        show: true,
                        fontSize: "14",
                        fontWeight: "bold",
                    },
                },
                data: data, // 显示的数据
            },
        ],
    };
    // 挂载配置
    chart.setOption(option);
}
// 树图图表配置
function setOptionTree(chart, data, echartsName) {
    let option = {
        color: [
            "#0066ff",
            "#ff9c00",
            "#00fcff",
            "#00bc73",
            "#f33887",
            "#5e66ff",
            "#f0d700",
        ],
        legend: {
            top: "bottom",
        },
        toolbox: {
            show: true,
        },
        series: [
            {
                type: "tree", //定义图表
                initialTreeDepth: -1, //初始显示节点深度
                name: echartsName, //图表名称
                animationType: "expansion", //初始动画效果
                animation: true,
                animationDuration: 3000,
                animationEasing: "cubicOut", //初始动画的缓动效果。
                animationDelay: 100,
                animationDurationUpdate: 3000,
                data: data, //最终渲染的数据
                height: "98%",
                left: 6,
                top: "middle",
                right: "29%",
                zoom: 1, // 缩放控制
                layout: "orthogonal", // 布局
                // roam: 'move',//控制图表滑动与缩放
                symbol: "rect", //标记的图形。
                symbolSize: 8, //标记的图形大小。
                itemStyle: {
                    //树图中每个节点的样式，
                    color: "rgb(136, 148, 255)",
                    borderJoin: "bevel",
                    shadowColor: "rgba(87, 116, 245, 0.78)",
                    shadowBlur: 2,
                    shadowOffsetX: 3,
                },
                label: {
                    //每个节点所对应的文本标签的样式。
                    position: "right",
                    color: "#333",
                    show: true,
                    formatter: "{b}",
                    backgroundColor: "rgb(174, 182, 252)",
                    borderColor: "rgba(43, 72, 201, 0.78)",
                    borderWidth: 1,
                    borderType: "solid",
                    borderDashOffset: 2,
                    borderRadius: 5,
                    padding: 4,
                    overflow: "truncate",
                    ellipsis: "...",
                },
                labelLayout: {
                    //标签的统一布局配置。
                    moveOverlap: "shiftX",
                    dx: -10,
                },
                lineStyle: {
                    //数图边线的样式
                    color: "rgba(136, 148, 255,.4)",
                },
                leaves: {
                    //叶子节点的特殊配置
                    label: {
                        show: true,
                        formatter: "{b}",
                        backgroundColor: "rgb(174, 182, 252)",
                        borderColor: "rgba(95, 122, 245, 0.78)",
                        borderWidth: 1,
                        borderType: "solid",
                        borderDashOffset: 2,
                        borderRadius: 2,
                        padding: 4,
                    },
                    itemStyle: {
                        color: "rgba(30, 54, 163, 0.78)",
                        borderJoin: "bevel",
                        shadowColor: "rgba(30, 54, 163, 0.78)",
                        shadowBlur: 2,
                        shadowOffsetX: 3,
                    },
                },
                emphasis: {
                    //选中后的样式
                    focus: "series",
                    blurScope: "coordinateSystem",
                    itemStyle: {
                        color: "rgba(25, 130, 215, 1)",
                    },
                    lineStyle: {
                        color: "#f85ea1",
                    },
                    label: {
                        position: "left",
                    },
                },
            },
        ],
    };
    chart.setOption(option);
}
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    /**
     * 组件的初始数据
     */
    data: {
        statusBarHeightRpx: app.globalData.statusBarHeightRpx, //状态栏高度
        navBarHeightRpx: app.globalData.navBarHeightRpx, //navbar高度
        list_skills_id: 0, //当前点击列表的技术栈id
        list_structure_id: 0, //当前点击列表的页面结构id
        // 懒加载
        ec_skills_page: {
            lazyLoad: true,
        },
        ec_page_structure: {
            lazyLoad: true,
        },
        // 项目经验列表
        projectLists: [
            {
                id: 0,
                type: "小程序端",
                appName: "《工程测绘大师》",
                shortLink: "#小程序://工程测绘/oAJljHkxfDM1cfD", //小程序链接
                envVersion: "release",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>该小程序的设计初衷是为了解决测绘计算繁琐等问题，便于实时计算繁琐的数据提高测绘的工作效率，后来也成为了我毕设的作品。</li>
        <li>该小程序的设计灵感来源于当时所学的《VB测绘程序设计》这门课程，看了三天的小程序开发文档，利用课余时间足足写了一周才完成初稿，由于当时技术能力有限程序还有很多待改进的地方。</li>
        <li>该小程序从设计图到代码设计全由我一人完成，使用组件开发思想实现，目前已有16个较为常见计算功能，后续会不断添加新功能和优化用户体验。</li>
    </ol>
    </div>`,
            },
            {
                id: 1,
                type: "小程序端",
                appName: "《汇车友》",
                shortLink: "#小程序://汇车友/kgGPCjudHApvqTm", //小程序链接
                envVersion: "trial",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
                <ol style="margin:0;padding:0;">
                <li>该小程序大致有30多个页面，切图主要用到了PS和Cutterman，标注用了Pxcook标注神器，实现快速开发。</li>
                <li>该小程序使用组件化开发思想开发，封装了多个动态组件如tabBar组件、选项卡组件、按钮组件、悬浮窗按钮组件等，根据父组件给子组件传参实现定制，高效的实现了代码复用。</li>
                <li>目前已实现全部主要的逻辑功能，功能较为齐全，并且已经过不断测试和完善，避免了大多数的bug。单位使用rpx可实现安卓和苹果系统手机端的页面的自适应，同时使用数据缓存实现存数据和读数据，避免某些不必要的请求，提升页面性能。</li>
                <li>配合ES6+语法更高效的开发应用。</li>
                </ol>
            </div>`,
            },
            {
                id: 2,
                type: "H5端",
                appName: "《汇车友》",
                shortLink: " https://huangjianghuahua.gitee.io", //h5链接
                envVersion: "trial",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>该程序为《汇车友》小程序的H5版本，主要使用目前最新的Vue3+Vite+Router+Pinia等技术。</li>
        <li>该程序以组合式形式进行开发单页面应用，用组件化开发的思想封装常用的组件，自行封装十多个常用组件，实现了代码的高效复用。</li>
        <li>完全使用Vue3全家桶进行开发，如用VueRouter实现路由管理，用Pinia配合localstorage实现全局的数据状态管理，Vue3相对与Vue2变得更加强大组件式函数让开发更为灵活。</li>
        <li>完全使用rem单位并进行了适配，能适配移各种尺寸的动端设备，避免多次开发。</li>
        <li>配合ES6+语法更高效的开发单页面应用。</li>
        </ol>
    </div>`,
            },
            {
                id: 3,
                type: "小程序端",
                appName: "《极致简历》",
                shortLink: "https://gitee.com/huangjianghuahua/resume/", //小程序链接
                envVersion: "release",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>该小程序设计的初衷是为了给自己做一个简单的简历，总结自己上大学以来所做的一些事情，主要使用百度的Echarts进行可视化图表的展示。</li>
        <li>在GitHub上找了与简历小程序相关的例子，发现与简历小程序相关的内容甚少，所以决定在GitHub上开源该小项目，同时给小程序中做了详细的注释浅显易懂，使用者只需要稍作修改即可使用。</li>
        <li>对于想学小程序开发的朋友而言，该简历小程序作为入门开发较为合适，但强烈建议先看完一遍小程序开发文档，再进行开发，这样收获才最大。</li>
        <li>下方的进入访问链接为开源链接.</li>
        </ol>
    </div>`,
            },
            {
                id: 4,
                type: "PC端",
                appName: "《全栈后台管理系统》",
                shortLink: "https://huangjianghuahua.gitee.io/myadmin/", //PC链接
                envVersion: "trial",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>前台主要使用Vite+Vue3+VueRouter+Pinia+ElementPlusUI+axios，后台配合Express+MySql+Navicat进行开发，使用flex实现布局页面精致能适配多数大中小屏幕。</li>
        <li>使用组件化思想开发，通过Navicat进行简单数据库设计配合express进行中转服务，最终前端利用axios请求获取到数据库数据进行展示。</li>
        <li>已实现常用的如主控台、内容管理、内容编辑、用户管理、角色管理、菜单权限管理等常用功能，可不断通过业务需求拓展。</li>
        </ol>
    </div>`,
            },
            {
                id: 5,
                type: "PC端",
                appName: "《炫酷的大屏可视化》",
                shortLink: "https://huangjianghuahua.gitee.io/charts/", //pc链接
                envVersion: "trial",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>该程序旨在展示企业品牌形象让浏览者能够快速认知该企业业务范围、人员占比、客户分布等功能。</li>
        <li>主要使用第三方百度的Echarts结合Vue3框架实现，已封装大多数场景使用的接口可以直接拿到后台数据使用，对一些流行的屏幕分辨率做了适配，能够很好适配大中小型屏幕尺寸。</li>
        </ol>
    </div>`,
            },
            {
                id: 6,
                type: "H5端",
                appName: "《仿微信读书》",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>该程序使用VueClI脚手架进行前端工程化构建，是使用Vue2框架配合Vue2全家桶进行组件化开发的单页面应用。</li>
        <li>采用前后端分离模式，前端利用mockjs提前开发相应界面，后端接口开发完毕后，前端立即对接数据。</li>
        <li>可实现找书、读书、前后翻页、主题切换、字号字体设置、阅读进度、加入书签等阅读常用的功能。</li>
        <li>配合ES6+语法更高效的开发单页面应用。</li>
        </ol>
    </div>`,
            },
            {
                id: 7,
                type: "H5端",
                appName: "《仿QQ音乐》",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>该程序使用目前最流行的Vite前端工程化构建，是使用最新版本的Vue3框架配合Vue3全家桶进行组件化开发的单页面应用。</li>
        <li>利用10个真实的线上接口，根据QQ音乐的UI界面进行开发，已实现推荐列表、歌手列表、歌手详情、歌曲播放及显示歌词、排行榜、歌单专辑、搜索歌曲等主要功能。</li>
        <li>抽离了多次使用到的代码进行混入及组件化封装定制。</li>
        </ol>
    </div>`,
            },
            {
                id: 8,
                type: "PC端",
                appName: "《全栈开发个人博客》",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>该博客为记录个人的所学所得而开发，利用了较为流行的Express框架配合MySQL及Vue实现了全栈开发，同时部署项目上线。</li>
        <li>技术涉及到前后端及后台管理，相对于只写前端会复杂较多，在一开始写后端的时候也遇到了很多的困难，最终还是克服。</li>
        <li>对于非科班的我来说或者对大家来说，理解前后端分离开发对于把控整个前端开发体系具有很重要意义，有了这个思想对于前端开发来说也变得更加简单。</li>
        </ol>
    </div>`,
            },
            {
                id: 9,
                type: "PC端",
                appName: "《全栈开发随心贴》",
                isSkillsPage: false, //是否显示技术栈页
                isStructurePage: false, //是否显示页面结构页
                duty: `<div class="rich-text">
        <ol style="margin:0;padding:0;">
        <li>该随心贴是在全栈博客的基础上开发，虽然内容简单，但也是利用了较为流行的Express框架配合MySQL及Vue实现全栈开发。</li>
        <li>技术涉及到前后端及后台管理，相对于只写前端会复杂较多，一个流程下来让我更加深刻的了解前后端分离开发模式，这对于把控前端开发具有重要意义。</li>
        </ol>
    </div>`,
            },
        ],
    },
    lifetimes: {
        attached() {
            // 初始化技术栈的图表组件实例节点
            this.getSkillsComponent();
            // 初始化页面结构的图表组件实例节点
            this.getStructureComponent();
        },
    },
    // 数据监听器
    observers: {
        // 每次改变重新获取显示技术栈的图表组件实例节点
        list_skills_id: function () {
            this.getSkillsComponent();
        },
        // 每次改变重新获取显示页面结构的图表组件实例节点
        list_structure_id: function () {
            this.getStructureComponent();
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 动态获取显示技术栈的图表组件实例节点
        getSkillsComponent() {
            const list_skills_id = this.data.list_skills_id;
            // 项目实例数据的长度
            const len = this.data.projectLists.length;
            // 根据列表动态生成对应的ID
            const idNameArr = [];
            for (let i = 0; i < len; i++) {
                idNameArr.push(`echarts-skills-page-dom${i}`);
            }
            // 返回当前选择器匹配的实例对象
            this.skillsPageComponent = this.selectComponent(
                "#" + idNameArr[list_skills_id]
            );
        },
        // 动态获取显示页面结构的图表组件实例节点
        getStructureComponent() {
            const list_structure_id = this.data.list_structure_id;
            // 项目实例数据的长度
            const len = this.data.projectLists.length;
            // 根据列表动态生成对应的ID
            const idNameArr = [];
            for (let i = 0; i < len; i++) {
                idNameArr.push(`echarts-page-structure-dom${i}`);
            }
            // 返回当前选择器匹配的实例对象
            this.pageStructureComponent = this.selectComponent(
                "#" + idNameArr[list_structure_id]
            );
        },
        /**
         * 展开当前点击的技术栈页面
         * @param {*} e 项目列表下标
         */
        showSkillsPage(e) {
            // 获取当前点击的列表下标
            const { list_skills_id } = e.currentTarget.dataset;
            // 从外部引入的当前对应的图表数据
            let data = skillPageData[list_skills_id];
            // 实例的数据
            let projectLists = this.data.projectLists;
            // 将当前点击的为true其他的为false
            projectLists.forEach((item, index) => {
                if (item.id === list_skills_id) {
                    projectLists[index].isSkillsPage = !projectLists[index].isSkillsPage;
                } else {
                    projectLists[index].isSkillsPage = false;
                }
                // 关闭所有页面结构页面
                projectLists[index].isStructurePage = false;
            });
            // 提交修改
            this.setData({
                projectLists,
                list_skills_id,
            });
            // 延迟加载图表避免出错
            setTimeout(() => {
                this.init_skills_page(data);
            }, 200);
            // 每次关闭后销毁图表
            this.disposeSkills();
            // echarts.dispose(this.disposeSkills())
        },
        /**
         * 展开当前点击的页面结构
         * @param {*} e 项目列表下标
         */
        showPageStructure(e) {
            // 获取当前点击的列表下标
            const { list_structure_id } = e.currentTarget.dataset;
            // 从外部引入的当前对应的图表数据
            let data = pageStructureData[list_structure_id];
            // 图表名称
            let echartsName = `${data[0].name}页面结构`;
            // 实例的数据
            let projectLists = this.data.projectLists;
            // 每次将当前点击的为true其他的为false，同一类别只显示一个。
            projectLists.forEach((item, index) => {
                if (item.id === list_structure_id) {
                    projectLists[index].isStructurePage = !projectLists[index]
                        .isStructurePage;
                } else {
                    projectLists[index].isStructurePage = false;
                }
                // 关闭所有技术栈页面
                projectLists[index].isSkillsPage = false;
            });
            // 提交修改
            this.setData({
                projectLists,
                list_structure_id,
            });
            // 延迟加载图表避免出错
            setTimeout(() => {
                this.init_page_structure(data, echartsName);
            }, 200);
            // 每次关闭销毁图表
            this.disposeStructure();
        },
        /**
         * 初始化技术栈数据图表
         * @param {*} data 当前的图表series中的data数据
         */
        init_skills_page: function (data) {
            // 初始化图表
            this.skillsPageComponent.init((canvas, width, height, dpr) => {
                // 获取组件的 canvas、width、height 后的回调函数
                // 在这里初始化图表
                const chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr, // 设备屏幕像素
                    renderer: "svg", //渲染模式
                });
                // 调用顶部定义的设置图表内容函数
                setOptionPie(chart, data);
                // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
                this.chartSkills = chart;
                // 注意这里一定要返回 chart 实例，否则会影响事件处理等
                return chart;
            });
        },
        /**
         *初始化页面结构数据图表
         * @param {*} data 当前的图表series中的data数据
         */
        init_page_structure: function (data, echartsName) {
            // 初始化图表
            this.pageStructureComponent.init((canvas, width, height, dpr) => {
                // 获取组件的 canvas、width、height 后的回调函数
                // 在这里初始化图表
                const chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr, // 设备屏幕像素
                    renderer: "svg", //渲染模式
                });
                // 配置图表信息
                setOptionTree(chart, data, echartsName);
                // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
                this.chartSructure = chart;
                // 注意这里一定要返回 chart 实例，否则会影响事件处理等
                return chart;
            });
        },
        // 销毁技术栈图表
        disposeSkills() {
            if (this.chartSkills) {
                this.chartSkills.dispose();
            }
        },
        // 销毁页面结构图表
        disposeStructure() {
            if (this.chartSructure) {
                this.chartSructure.dispose();
            }
        },
        // 打开对应的小程序或复制网页
        navToApp(e) {
            // 实例的数据
            let projectLists = this.data.projectLists;
            // 当前选择的列表id
            const { listid } = e.currentTarget.dataset;
            // 打开小程序
            if (
                projectLists[listid].type === "小程序端" &&
                projectLists[listid].shortLink
            ) {
                // 打开符合APPID的小程序
                wx.navigateToMiniProgram({
                    shortLink: projectLists[listid].shortLink,
                    envVersion: projectLists[listid].envVersion,
                    fail(res) {
                        wx.showToast({
                            title: "打开程序失败,小程序体验版需授权访问。",
                            icon: "none",
                        });
                    },
                });
            }
            // 复制网页链接
            if (
                projectLists[listid].type === "H5端" ||
                projectLists[listid].type === "PC端"
            ) {
                wx.setClipboardData({
                    data: projectLists[listid].shortLink,
                    success(res) {
                        wx.getClipboardData({
                            success(res) {
                                wx.showToast({
                                    title: "复制链接成功,请到浏览器打开。",
                                    icon: "none",
                                });
                            },
                            fail(err) {
                                wx.showToast({
                                    title: "复制链接失败!",
                                    icon: "error",
                                });
                            },
                        });
                    },
                });
            }
            // 关闭所有展开的图表页面
            projectLists.forEach((item, index) => {
                projectLists[index].isStructurePage = false;
                projectLists[index].isSkillsPage = false;
            });
            // 提交修改
            this.setData({
                projectLists,
            });
        },
    },
});
