// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"我是首页的title"
  },
  primary(){
    console.log("111");
    wx.navigateTo({
      url:'../index/index'
    })
  },
  // 传值
  details(event){
    var aid = event.currentTarget.dataset.aid;
    wx.navigateTo({
      url: '../compent/compent?aid=' + aid
    });
  },
  // 父组件调用子组件的方法
  getChild(){
    var header = this.selectComponent("#header");
    header.run1();
    // 获取子组件的数据
    var headMsg = header.data.msg;
    console.log(headMsg)
  }, 
  // 
  home(e){
    console.log(e.detail);
    console.log("我是home组件的方法")
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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