// pages/details/details.js
var WxParse = require('../../wxParse/wxParse.js');
var config = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  details(aid) {
    var _this = this;
    var api = config.host+'/appapi.php?a=getPortalArticle&aid=' + aid;
    wx.request({
      url: api,
      data: {
        list: [],
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var data = res.data.result[0];
        // 替换反斜杠
        // data.img_url=data.img_url.replace(/\\/g,'/')
        // 解析html代码
        var article = data.content;
        WxParse.wxParse('article', 'html', article, _this, 5);
        // console.log(res.data);
        _this.setData({
          list: data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.details(options.aid);
    // console.log(options.aid+"88")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})