// 图表数据配置
// 技术栈的数据
const skillPageData = [
  [
    //《工程测绘大师》
    { value: 90, name: "测绘地理信息" },
    { value: 90, name: "投影变换" },
    { value: 90, name: "经纬度转换" },
    { value: 90, name: "WXSS" },
    { value: 80, name: "JS" },
    { value: 80, name: "SASS" },
    { value: 70, name: "WXML" },
    { value: 40, name: "组件化开发" },
  ],
  [
    //《汇车友》
    { value: 90, name: "JS" },
    { value: 80, name: "WXML" },
    { value: 80, name: "SASS" },
    { value: 70, name: "WXSS" },
    { value: 40, name: "组件化开发" },
    { value: 30, name: "ES6+语法" },
    { value: 28, name: "腾讯地图位置服务" },
    { value: 26, name: "Echarts5" },
    { value: 10, name: "地图选点" },
    { value: 10, name: "路线规划" },
    { value: 10, name: "城市选择" },
    { value: 10, name: "小程序接口" },
    { value: 10, name: "storage本地缓存" },
  ],
  [
    //《汇车友》
    { value: 90, name: "Vue3" },
    { value: 80, name: "CSS" },
    { value: 80, name: "Vite" },
    { value: 80, name: "SASS" },
    { value: 60, name: "HTML" },
    { value: 40, name: "组件化开发" },
    { value: 30, name: "JS" },
    { value: 30, name: "ES6+语法" },
    { value: 28, name: "VueRouter" },
    { value: 28, name: "Pinia" },
    { value: 26, name: "Echarts5" },
    { value: 10, name: "Localstorage" },
    { value: 10, name: "Slot" },
  ],
  [
    //《极致简历》
    { value: 90, name: "JS" },
    { value: 80, name: "WXML" },
    { value: 80, name: "SASS" },
    { value: 70, name: "WXSS" },
    { value: 40, name: "组件化开发" },
    { value: 30, name: "ES6+语法" },
    { value: 26, name: "Echarts5" },
    { value: 10, name: "小程序接口" },
  ],
  [
    //《大屏可视化》
    { value: 90, name: "Vue3" },
    { value: 80, name: "CSS" },
    { value: 80, name: "SASS" },
    { value: 60, name: "HTML" },
    { value: 40, name: "组件化开发" },
    { value: 30, name: "JS" },
    { value: 30, name: "ES6+语法" },
    { value: 30, name: "Vite" },
    { value: 28, name: "VueRouter" },
    { value: 28, name: "Pinia" },
    { value: 26, name: "Echarts5" },
  ],
  [
    //《仿微信读书》
    { value: 90, name: "Vue2" },
    { value: 80, name: "CSS" },
    { value: 80, name: "SASS" },
    { value: 60, name: "HTML" },
    { value: 40, name: "JS" },
    { value: 40, name: "组件化开发" },
    { value: 30, name: "ES6+语法" },
    { value: 30, name: "EpubJs" },
    { value: 30, name: "VueClI" },
    { value: 28, name: "VueRouter" },
    { value: 28, name: "VueX" },
    { value: 20, name: "Promise" },
    { value: 20, name: "axios" },
  ],
  [
    //《仿QQ音乐》
    { value: 90, name: "Vue3" },
    { value: 80, name: "CSS" },
    { value: 80, name: "SASS" },
    { value: 60, name: "HTML" },
    { value: 40, name: "组件化开发" },
    { value: 30, name: "JS" },
    { value: 30, name: "ES6+语法" },
    { value: 30, name: "Vite" },
    { value: 28, name: "VueRouter" },
    { value: 28, name: "Pinia" },
    { value: 20, name: "axios" },
    { value: 10, name: "BetterScroll滚动" },
    { value: 10, name: "GoodStorage本地存储" },
  ],
];

/**
 * ------------------------------------------页面结构主要数据----------------------------------------
 */
let pageStructureData = [
  [
    {
      name: "工程测绘大师",
      children: [
        {
          name: "测绘",
          children: [
            {
              name: "中央子午线计算",
              children: [
                {
                  name: "3°带",
                },
                {
                  name: "6°带",
                },
              ],
            },
            {
              name: "角度与弧度转换",
              children: [
                {
                  name: "角度转度分秒",
                },
                {
                  name: "度分秒转角度",
                },
                {
                  name: "弧度转度与度分秒",
                },
                {
                  name: "度分秒转弧度",
                },
              ],
            },
            {
              name: "坐标计算",
              children: [
                {
                  name: "坐标正算",
                },
                {
                  name: "坐标反算",
                },
                {
                  name: "建筑坐标转测量坐标",
                },
                {
                  name: "测量坐标转建筑坐标",
                },
              ],
            },
            {
              name: "交会定点",
              children: [
                {
                  name: "前方",
                },
                {
                  name: "后方",
                },
                {
                  name: "侧边",
                },
              ],
            },
            {
              name: "圆曲线放样",
              children: [
                {
                  name: "单一偏角法放样",
                },
              ],
            },
            {
              name: "投影计算",
              children: [
                {
                  name: "高斯正反算",
                },
              ],
            },
            {
              name: "导线测量",
              children: [
                {
                  name: "方位角计算",
                },
                {
                  name: "方位角推算",
                },
                {
                  name: "附合导线",
                },
                {
                  name: "闭合导线",
                },
              ],
            },
            {
              name: "水准测量",
              children: [
                {
                  name: "附合水准",
                },
                {
                  name: "闭合水准",
                },
                {
                  name: "支水准",
                },
              ],
            },
          ],
        },
        {
          name: "组件",
          children: [
            {
              name: "组件",
              children: [
                {
                  name: "传统时钟",
                },
                {
                  name: "炫酷时钟",
                },
              ],
            },
            {
              name: "实用工具",
              children: [
                {
                  name: "计算器",
                },
                {
                  name: "指北针",
                },
                {
                  name: "获取当前经纬度",
                },
              ],
            },
          ],
        },
        {
          name: "我的",
          children: [
            {
              name: "关于版本",
            },
            {
              name: "关于我",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      name: "汇车友",
      children: [
        {
          name: "首页",
          children: [
            {
              name: "朋友圈主页",
            },
            {
              name: "查看设置",
            },
            {
              name: "详情",
            },
            {
              name: "发布",
            },
          ],
        },
        {
          name: "车汇",
          children: [
            {
              name: "主页列表",
            },
            {
              name: "拼车",
              children: [
                {
                  name: "地图选点",
                },
                {
                  name: "路线规划",
                },
                {
                  name: "人找车",
                  children: [
                    {
                      name: "发布人找车",
                    },
                  ],
                },
                {
                  name: "车找人",
                  children: [
                    {
                      name: "发布车找人",
                    },
                  ],
                },
              ],
            },
            {
              name: "租车需求",
              children: [
                {
                  name: "地图选点",
                },
                {
                  name: "路线规划",
                },
                {
                  name: "发布租车需求",
                },
              ],
            },
            {
              name: "车队",
              children: [{ name: "车队列表" }, { name: "群聊" }],
            },
            {
              name: "选择城市",
              children: [{ name: "全省城市" }],
            },
            {
              name: "筛选",
              children: [{ name: "可筛选列表" }],
            },
          ],
        },
        {
          name: "消息",
          children: [
            {
              name: "消息",
            },
            {
              name: "朋友",
            },
            {
              name: "添加页",
            },
          ],
        },
        {
          name: "我的",
          children: [
            {
              name: "账户余额",
              children: [{ name: "充值" }, { name: "提现" }],
            },
            {
              name: "车辆信息",
              children: [{ name: "车辆信息列表" }, { name: "添加车辆" }],
            },
            {
              name: "我的订单",
            },
            {
              name: "我的发布",
              children: [
                { name: "朋友圈可视化数据" },
                { name: "拼车及租车可视化数据" },
              ],
            },
            {
              name: "意见分享",
            },
            {
              name: "关于汇车友",
            },
            {
              name: "分享汇车友",
            },
            {
              name: "检测更新",
            },
            {
              name: "更多设置",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      name: "汇车友",
      children: [
        {
          name: "首页",
          children: [
            {
              name: "朋友圈主页",
            },
            {
              name: "查看设置",
            },
            {
              name: "详情",
            },
            {
              name: "发布",
            },
          ],
        },
        {
          name: "车汇",
          children: [
            {
              name: "主页列表",
            },
            {
              name: "拼车",
              children: [
                {
                  name: "地图选点",
                },
                {
                  name: "路线规划",
                },
                {
                  name: "人找车",
                  children: [
                    {
                      name: "发布人找车",
                    },
                  ],
                },
                {
                  name: "车找人",
                  children: [
                    {
                      name: "发布车找人",
                    },
                  ],
                },
              ],
            },
            {
              name: "租车需求",
              children: [
                {
                  name: "地图选点",
                },
                {
                  name: "路线规划",
                },
                {
                  name: "发布租车需求",
                },
              ],
            },
            {
              name: "车队",
              children: [{ name: "车队列表" }, { name: "群聊" }],
            },
            {
              name: "选择城市",
              children: [{ name: "全省城市" }],
            },
            {
              name: "筛选",
              children: [{ name: "可筛选列表" }],
            },
          ],
        },
        {
          name: "消息",
          children: [
            {
              name: "消息",
            },
            {
              name: "朋友",
            },
            {
              name: "添加页",
            },
          ],
        },
        {
          name: "我的",
          children: [
            {
              name: "账户余额",
              children: [{ name: "充值" }, { name: "提现" }],
            },
            {
              name: "车辆信息",
              children: [{ name: "车辆信息列表" }, { name: "添加车辆" }],
            },
            {
              name: "我的订单",
            },
            {
              name: "我的发布",
              children: [
                { name: "朋友圈可视化数据" },
                { name: "拼车及租车可视化数据" },
              ],
            },
            {
              name: "意见分享",
            },
            {
              name: "关于汇车友",
            },
            {
              name: "分享汇车友",
            },
            {
              name: "检测更新",
            },
            {
              name: "更多设置",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      name: "极致简历",
      children: [
        {
          name: "进入页动画",
        },
        {
          name: "基本信息",
          children: [
            {
              name: "个人详情",
            },
            {
              name: "教育背景",
            },
            {
              name: "自我评价",
            },
          ],
        },
        {
          name: "项目经验",
          children: [
            {
              name: "各项目列表",
            },
          ],
        },
        {
          name: "专业技能",
          children: [
            {
              name: "技能列表",
            },
            {
              name: "工具集",
            },
          ],
        },
        {
          name: "博客创作",
          children: [
            {
              name: "各创作平台个人ID",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      name: "大屏可视化",
      children: [
        {
          name: "首页",
        },
        {
          name: "车汇",
        },
        {
          name: "消息",
        },
        {
          name: "我的",
        },
      ],
    },
  ],
  [
    {
      name: "仿微信读书",
      children: [
        {
          name: "首页",
          children: [
            { name: "详情页" },
            {
              name: "阅读页",
              children: [
                { name: "目录" },
                {
                  name: "书签",
                },
                {
                  name: "主题",
                },
              ],
            },
          ],
        },
        {
          name: "找书",
          children: [
            { name: "阅读页" },
            {
              name: "阅读页",
              children: [
                { name: "目录" },
                {
                  name: "书签",
                },
                {
                  name: "主题",
                },
              ],
            },
          ],
        },
        {
          name: "加入书架",
          children: [
            {
              name: "书架",
            },
            {
              name: "阅读页",
              children: [
                { name: "目录" },
                {
                  name: "书签",
                },
                {
                  name: "主题",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  [
    {
      name: "仿QQ音乐",
      children: [
        {
          name: "搜索",
          children: [
            {
              name: "歌单详情",
              children: [
                {
                  name: "歌曲列表",
                  children: [
                    {
                      name: "播放器",
                    },
                    {
                      name: "歌词",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "推荐",
          children: [
            {
              name: "歌单详情",
              children: [
                {
                  name: "歌曲列表",
                  children: [
                    {
                      name: "播放器",
                    },
                    {
                      name: "歌词",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "歌手",
          children: [
            {
              name: "歌手详情",
              children: [
                {
                  name: "歌曲列表",
                  children: [
                    {
                      name: "播放器",
                    },
                    {
                      name: "歌词",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "排行榜",
          children: [
            {
              name: "歌单详情",
              children: [
                {
                  name: "歌曲列表",
                  children: [
                    {
                      name: "播放器",
                    },
                    {
                      name: "歌词",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "我的",
          children: [
            {
              name: "最近播放",
            },
            {
              name: "收藏歌曲",
            },
          ],
        },
      ],
    },
  ],
];

// 导出数据
module.exports = {
  skillPageData,
  pageStructureData,
};
