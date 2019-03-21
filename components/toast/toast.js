// components/toast/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    toastShow: false,
    toastText: '内容'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showToast(text, time) {
      this.setData({
        toastShow: !this.data.toastShow,
        toastText: text
      })
      var that = this
      if (!time) {
        time = 8000
      }
      setTimeout(function () {
        that.setData({
          toastShow: !that.data.toastShow
        })
      }, time)
    }
  }
})
