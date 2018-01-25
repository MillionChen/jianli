
var wxCharts = require('../utils/wxcharts.js');
Page({
  onLoad(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
      console.log(windowWidth)
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    new wxCharts({
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [
      {
        name: 'facebook',
        data: 15,
      },
       {
        name: 'twitter',
        data: 18,
      },
       {
         name: 'cdns',
         data: 20,
       },
       {
         name: '掘金',
         data: 16,
       },
       {
         name: 'npm',
         data: 20,
       },
       {
         name: 'stackoverflow',
         data: 30,
       },
       {
        name: 'github',
        data: 30,
        fontSize: 3005,
        color: '#ff4400',
      }
      ],
      
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
    new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      categories: ['打台球',"旅游",'摄影', '做饭','看电影'],
      series: [{
        name: '兴趣爱好',
        data: [25,25,25, 25,25],
        color: '#cddc39',
      }
        ],
      yAxis: {
        format: function (val) {
          return val + '%';
        }
      },
      width: windowWidth,
      height: 200
    });
    new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['HTML', 'JavaScript','Css', 'React', 'ES6', '小程序',"Vue","Node"],
      series: [{
        name: '技术领域',
        data: [140, 160, 140, 155, 160, 142,130,120]
      }],
      width: windowWidth,
      height: 175,
      extra: {
        radar: {
          max: 150
        }
      },
      
    });
   
  }
});

