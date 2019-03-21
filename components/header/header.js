// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title:{
    //   type:String,
    //   value:"默认头部"
    // }
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"这是一个头部组件",
    mgs:"我是子组件的数据"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    run(){
      console.log(this.data.msg);
      this.setData({
        msg:"改变后的头部"
      })
    },
    run1(){
      console.log("我是子组件的方法")
    },
    // 执行伏组件的方法 并给父组件传值
    runHome(){
        this.triggerEvent('paraet', '数据1','参数');
    }
  }
})
