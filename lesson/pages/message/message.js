// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  // 音乐
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  data: {
    poster: 'http://www.wsxz.cn/ylzx/uploads/allimg/170521/1RP96416-0.jpg',
    name: '小鲜肉',
    author: '川大大',
    text: '感谢您花费宝贵的时间阅读我的简历，期待有机会和您共事',
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 60,
    size: 14,
    orientation: 'left',//滚动方向
    interval: 20, // 时间间隔
  },
  // 音乐
  goHome() {
    wx.navigateTo({
      url: '../home/home',
    })
  },
  goInfo() {
    wx.navigateTo({
      url: '../info/info',
    })
  },
  goSocialshar() {
    wx.navigateTo({
      url: '../socialshare/socialshare',
    })
  },
  goPnone() {
    wx.navigateTo({
      url: '../phone/phone',
    })
  },
  goAudio() {
    wx.navigateTo({
      url: '../audio/audio',
    })
  }
  ,

  /**
   * 生命周期函数--监听页面显示
   */
 
  
  // 自动播放音乐
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://fs.w.kugou.com/201801232149/5074bfc535646f30479784319cfe6164/G105/M00/00/0D/SZQEAFmTy76AOpoeADKIRL1lQPc079.mp3')
    this.audioCtx.play()
  },
  // 自动播放音乐 end

  // 电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15021972068',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  // 
  
  onShow: function () {
    // 页面显示
    var vm = this;
    var length = vm.data.text.length * vm.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    vm.setData({
      length: length,
      windowWidth: windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
    });
    // vm.run1();// 水平一行字滚动完了再按照原来的方向滚动
    vm.run2();// 第一个字消失后立即从右边出现
  },
  run1: function () {
    var vm = this;
    var interval = setInterval(function () {
      if (-vm.data.marqueeDistance < vm.data.length) {
        vm.setData({
          marqueeDistance: vm.data.marqueeDistance - vm.data.marqueePace,
        });
      } else {
        clearInterval(interval);
        vm.setData({
          marqueeDistance: vm.data.windowWidth
        });
        vm.run1();
      }
    }, vm.data.interval);
  },
  run2: function () {
    var vm = this;
    var interval = setInterval(function () {
      if (-vm.data.marqueeDistance2 < vm.data.length) {
        // 如果文字滚动到出现marquee2_margin=30px的白边，就接着显示
        vm.setData({
          marqueeDistance2: vm.data.marqueeDistance2 - vm.data.marqueePace,
          marquee2copy_status: vm.data.length + vm.data.marqueeDistance2 <= vm.data.windowWidth + vm.data.marquee2_margin,
        });
      } else {
        if (-vm.data.marqueeDistance2 >= vm.data.marquee2_margin) { // 当第二条文字滚动到最左边时
          vm.setData({
            marqueeDistance2: vm.data.marquee2_margin // 直接重新滚动
          });
          clearInterval(interval);
          vm.run2();
        } else {
          clearInterval(interval);
          vm.setData({
            marqueeDistance2: -vm.data.windowWidth
          });
          vm.run2();
        }
      }
    }, vm.data.interval);
  }
  ,
  // clearTimer(){
  //   clearInterval(vm.interval);
  // }
  
  
  })