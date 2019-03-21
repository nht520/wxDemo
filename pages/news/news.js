// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:"我是新闻",
    show:false,
    obj:{
      name:"得到"
    },
    id:"123",
    lst2:[
      "11","22","33","44"
    ],
    list:[
      {
        title:"我是标题1",
        list1:[
          {
            name: "张三",
            pswor: "123"
          }
        ]
      },
      {
        title: "我是标题2",
        list1: [
          {
            name: "李四",
            pswor: "123"
          }
        ]
      },
      {
        title: "我是标题3",
        list1: [
          {
            name: "王码字",
            pswor: "123"
          }
        ]
      }
    ]
  },

  run(){
    console.log("1211");
    // 获取data里面的数据
    this.list=this.data.news;
    console.log(this.list);
    // 改变data里面的值
    this.setData({
      show:true
    })
  },
  // 事件对象
  setEvt(e) {
    console.log(e)
    // 获取自定义属性的值
    console.log(e.currentTarget.dataset.aid)
  },
  // 小程序里面执行方法传值
  reqDtate(e){
    console.log(e);
  },
//  在view层执行方法传值
  zxbutn(event){
    console.log("111");
    console.log(event.currentTarget.dataset)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.reqDtate("666");
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