// pages/components/base-skills/base-skills.js
// 引入echarts图表库
import * as echarts from "../../../ec-canvas/echarts.min.js";
// 全局实例
const app = getApp();
// 设置图表
/**
 * 
 * @param {*} chart 初始化图表
 * @param {*} le_data 图例
 * @param {*} series_data 图表配置数据
 */
function setOptions(chart, le_data, series_data) {
    let option = {
        tooltip: {
            trigger: "item", //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            confine: true, //是否将 tooltip 框限制在图表的区域内。
            // formatter: '{b}\n{c}%',//字符串模板。
            axisPointer: {
                type: "none",
                snap: true,
                type: "line",
            },
        },
        grid: {
            left: "6%",
            right: "6%",
            bottom: "3%",
            top: "1%",
            containLabel: true,
        },
        xAxis: {
            // name: "x",
            nameLocation: "start",
            type: "value",
            alignTicks: true,
            max: "dataMax", //用数据的最大值作为 X 轴最大值
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                formatter: "{value}%",
            },
            axisLine: {
                show: false,
            },
            // axisPointer:{//触屏辅助图标
            //     handle:{
            //         show:true
            //     }
            // }
        },
        yAxis: {
            // show: true,
            // name: "y",
            type: "category",
            inverse: true, //是否反转坐标轴
            nameLocation: "start",
            nameGap: 10, //坐标轴名称与轴线之间的距离。
            animationDuration: 300, //第一次柱条排序动画的时长
            animationDurationUpdate: 300, //第一次后柱条排序动画的时长
            axisLine: {
                //坐标轴轴线相关设置。
                show: false,
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false,
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                show: false,
                inside: false,
            },
            data: [
                "HTML/HTML5",
                "CSS/CSS3",
                "Less/Sass",
                "JS",
                "微信小程序",
                "React",
                "Es6+语法",
                "BootStrap",
                "Axios/Ajax",
                "Vue2/Vue3全家桶",
                "Echarts",
                "Uniapp",
                "Nodejs",
                "Mongoose",
                'Vite',
                "TS"
            ],
        },
        series: series_data, //核心图表的配置
        animationDuration: 3000,// 第二次开始后的动画
        animationDurationUpdate: 3000,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
    };
    // 将设置的参数挂载渲染
    chart.setOption(option);
}
Component({
    /**
     * 组件的初始数据
     */
    data: {
        statusBarHeightRpx: app.globalData.statusBarHeightRpx, //状态栏高度
        navBarHeightRpx: app.globalData.navBarHeightRpx, //navbar高度
        // 懒加载
        ec_skills: {
            lazyLoad: true,
        },
    },
    lifetimes: {
        attached() {
            // 每次显示滚动到顶部
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 300
            })
            // 获取实例dom
            this.skillsComponent = this.selectComponent("#echarts-skills-dom");
            // 最终调用
            this.init_skills();
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 图表
        init_skills() {
            // 初始化图表库(将canvas绑定到获取实例dom上)
            this.skillsComponent.init((canvas, width, height, dpr) => {
                // 获取组件的 canvas、width、height 后的回调函数
                // 在这里初始化图表
                const chart = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr, // 设备屏幕像素
                });
                // 核心图表配置
                setOptions(
                    chart,
                    ["技术栈"],
                    [
                        {
                            name: "技术栈",
                            type: "bar",
                            colorBy: "data", //按照数据项分配调色盘中的颜色，每个数据项都使用不同的颜色。
                            smooth: true, //平滑
                            left: "",
                            right: "",
                            legendHoverLink: true, //联动高亮
                            realtimeSort: true, //动态实时排序
                            showBackground: true,
                            backgroundStyle: {
                                color: "rgba(180, 180, 180, 0.2)",
                                borderRadius: 20,
                            },
                            itemStyle: {
                                borderRadius: 20, //（顺时针左上，右上，右下，左下）
                                shadowColor: "rgba(0, 0, 0, 0.2)",
                                shadowBlur: 3,
                                shadowOffsetX: 4,
                            },
                            emphasis: {
                                //点击后高亮效果
                                itemStyle: {
                                    borderColor: "rgb(81, 63, 241)",
                                },
                                label: {
                                    show: true,
                                    formatter: "{b}", //字符串模板 模板变量
                                    valueAnimation: true, //根据动画实时改变标签位置
                                },
                            },
                            label: {
                                show: true,
                                formatter: "{b}", //字符串模板 模板变量
                                valueAnimation: true, //根据动画实时改变标签位置
                            },
                            data: [100, 90, 60, 90, 90, 50, 70, 80, 90, 90, 70, 70, 40, 30, 70, 40],
                        },
                    ]
                );
                // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
                this.chart = chart;
                // 注意这里一定要返回 chart 实例，否则会影响事件处理等
                return chart;
            });
        },
    },
});
