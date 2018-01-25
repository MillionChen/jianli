// pages/home/home.js
var vitaeData = require('../../data/vitaeData.js');
Page({
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
  /**
   * 页面的初始数据
   */
  data: {
    arr: vitaeData
  }
 
  
  
})