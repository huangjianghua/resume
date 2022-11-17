// index.js
import * as echarts from "../../ec-canvas/echarts.min";
// 获取应用实例
const app = getApp();
// 定时器
let timer;
let dataStyle = {
  //取消标签显示
  normal: {
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
    shadowBlur: 40,
    shadowColor: "rgba(0, 0, 0,0.8)",
  },
};
let data = [
  //模拟的数据
  {
    value: 3,
    name: "探索",
    selected: false,
  },
  {
    value: 2,
    name: "期待您的发现",
    selected: false,
  },
  {
    value: 1,
    name: "您的",
    selected: false,
  },
];

let angle = 0; //角度，用来做简单的动画效果的
function setOption(chart) {
  let option = {
    //最核心图表配置
    title: {
      //标题
      text: "欢迎来到我的星球",
      left: "center",
      top: "center",
      textStyle: {
        color: "#ff9c00",
        fontSize: 20,
        fontWeight: 400,
        fontFamily: "Courier New",
        textShadowColor: "#945e07",
        textShadowBlur: 9,
        textShadowOffsetX: 4,
        textShadowOffsetY: 1,
        rich: {},
      },
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    grid: {
      //直角坐标系内绘图网格
      left: "0%",
      top: "0%",
      right: "0%",
      bottom: "0%",
    },
    series: [
      //配置图表
      {
        name: "my",
        type: "pie",
        radius: ["58%", "35%"], //外半径，内半径
        animation: true, //开启动画
        animationDuration: 3000, //动画时长
        avoidLabelOverlap: false, //是否启用防止标签重叠策略
        selectedMode: "single", //选中模式的配置
        selectedOffset: 30, //图表偏移量
        roseType: "area", //是否展示成南丁格尔图
        color: [
          "#0066ff",
          "#ff9c00",
          "#00fcff",
          "#00bc73",
          "#f33887",
          "#5e66ff",
          "#f0d700",
        ],
        itemStyle: dataStyle,
        data: data,
        silent: true, //图形是否不响应和触发鼠标事件
      },
      {
        name: "ring4",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "arc",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.85,
              startAngle: ((0 + -angle) * Math.PI) / 180,
              endAngle: ((90 + -angle) * Math.PI) / 180,
            },
            style: {
              stroke: "rgb(255, 255, 255,0.2)",
              fill: "transparent",
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring5",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "arc",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.85,
              startAngle: ((180 + -angle) * Math.PI) / 180,
              endAngle: ((270 + -angle) * Math.PI) / 180,
            },
            style: {
              stroke: "rgb(255, 255, 255,0.2)",
              fill: "transparent",
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring4",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "ring",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.8,
              r0: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.58,
            },
            style: {
              stroke: "transparent",
              fill: new echarts.graphic.LinearGradient(0, 0.58, 0, 0.8, [
                {
                  // 0% 处的颜色
                  offset: 0,
                  color: "rgb(255, 255, 255,0.1)",
                },
                {
                  // 100% 处的颜色
                  offset: 1,
                  color: "transparent",
                },
              ]),
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring5",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "arc",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.6,
              startAngle: ((0 + angle) * Math.PI) / 180,
              endAngle: ((90 + angle) * Math.PI) / 180,
            },
            style: {
              stroke: "#086d9f",
              fill: "transparent",
              lineWidth: 1.5,
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring5",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "arc",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.6,
              startAngle: ((180 + angle) * Math.PI) / 180,
              endAngle: ((270 + angle) * Math.PI) / 180,
            },
            style: {
              stroke: "#086d9f",
              fill: "transparent",
              lineWidth: 1.5,
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring5",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "arc",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.65,
              startAngle: ((270 + -angle) * Math.PI) / 180,
              endAngle: ((40 + -angle) * Math.PI) / 180,
            },
            style: {
              stroke: "#883d20",
              fill: "transparent",
              lineWidth: 1.5,
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring5",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "arc",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.65,
              startAngle: ((90 + -angle) * Math.PI) / 180,
              endAngle: ((220 + -angle) * Math.PI) / 180,
            },
            style: {
              stroke: "#883d20",
              fill: "transparent",
              lineWidth: 1.5,
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring5",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          let x0 = chart.getWidth() / 2;
          let y0 = chart.getHeight() / 2;
          let r = (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.65;
          let point = getCirlPoint(x0, y0, r, 90 + -angle);
          return {
            type: "circle",
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4,
            },
            style: {
              stroke: "#883d20",
              fill: "#883d20",
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring5",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          let x0 = chart.getWidth() / 2;
          let y0 = chart.getHeight() / 2;
          let r = (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.65;
          let point = getCirlPoint(x0, y0, r, 270 + -angle);
          return {
            type: "circle",
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4,
            },
            style: {
              stroke: "#883d20",
              fill: "#883d20",
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring1",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "ring",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.37,
            },
            style: {
              stroke: "rgba(255,255,255,0.4)",
              fill: "transparent",
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring2",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "ring",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.3,
            },
            style: {
              stroke: "#0885b5",
              fill: "transparent",
              lineWidth: 2,
              lineDash: [15, 10],
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring3",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "ring",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.28,
            },
            style: {
              stroke: "rgba(16, 81, 167,.5)",
              fill: "transparent",
            },
            silent: true,
          };
        },
        data: [0],
      },
      {
        name: "ring4",
        type: "custom",
        coordinateSystem: "none",
        renderItem: function (params, chart) {
          return {
            type: "ring",
            shape: {
              cx: chart.getWidth() / 2,
              cy: chart.getHeight() / 2,
              r: (Math.min(chart.getWidth(), chart.getHeight()) / 2) * 0.2,
            },
            style: {
              stroke: "#873c20",
              fill: "transparent",
            },
            silent: true,
          };
        },
        data: [0],
      },
    ],
    backgroundColor: {//画布背景色
      type: "radial",
      x: 0.4,
      y: 0.4,
      r: 0.35,
      colorStops: [
        {
          offset: 0,
          color: "#895355", // 0% 处的颜色
        },
        {
          offset: 0.4,
          color: "#593640", // 100% 处的颜色
        },
        {
          offset: 1,
          color: "#39273d", // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },
  };
  // 挂载配置
  chart.setOption(option);
  //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
  function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
    return {
      x: x1,
      y: y1,
    };
  }

  function draw() {
    //让图形旋转
    angle = angle + 4;
    chart.setOption(option, true);
  }
  if (timer) {
    clearInterval(timer);
  }
  // 等图表进入动画完成后再执行
  setTimeout(() => {
    timer = setInterval(function () {
      draw();
      times++;
      if (times >= 20) {
        times = 0;
        changeSelect();
      }
    }, 100);
  }, 3000);
  let times = 0;
  let count = 0;
  function changeSelect() {
    //改变当前选中及标题
    let r = count % data.length;
    option.series[0].data[r].selected = false;

    count++;
    let s = count % data.length;
    option.series[0].data[s].selected = true;
    option.title.text = option.series[0].data[s].name;
    chart.setOption(option, true);
  }
}

Page({
  data: {
    // 懒加载
    ec: {
      lazyLoad: true,
    },
  },
  onLoad() {},
  onReady() {
    this.echartsComponent = this.selectComponent("#echarts-dom");
    this.init_echarts();
  },
  // 初始化并加载图表
  // 初始化技术栈数据图表
  init_echarts: function () {
    // 初始化图表
    this.echartsComponent.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr, // 设备屏幕像素
        renderer: "svg", //渲染模式
      });
      // 调用顶部定义的设置图表内容函数
      setOption(chart);
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
    // 动画结束后跳转至首页
    this.timer2 = setTimeout(() => {
      wx.redirectTo({
        url: "/pages/home/home",
      });
    }, 11000);
  },
  // 进入首页
  navToHome() {
    wx.redirectTo({
      url: "/pages/home/home",
    });
  },
  onUnload() {
    //  清除动画定时器
    clearInterval(timer);
    // 清除动画结束后跳转至首页定时器
    clearTimeout(this.timer2);
  },
});
