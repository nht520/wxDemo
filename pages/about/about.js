// pages/about/about.js
// 引用共公的api库
var config = require('../../utils/config.js');
var app = getApp();//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  requestData(){
    var _this = this;
    wx.request({
      url: config.host+'/appapi.php?a=getPortalList&catid=20', 
      data: {
        list:[],
        // host:"http://a.itying.com"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        // 替换 \  /
        // var arr =res.data.result;
        // for(var i=0; i<arr.length;i++){
        //     for(var j=0;j<arr[i].list.length;j++){
        //       arr[i].list[j].img_url=arr[i].list[j].img_url.replace(/\\/g,'/')
        //     }
        // }
        _this.setData({
          list:res.data.result
        })
      }
    })
  },
  // 获取对应的id

  goContent(event) {
    console.log(event);
    var aid = event.currentTarget.dataset.aid;
    console.log(aid);
    wx.navigateTo({
      url: '../details/details?aid='+aid,
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData();
    // 调用全局app.js方法
    app.getapp();

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