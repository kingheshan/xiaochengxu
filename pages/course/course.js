// pages/course/course.js
Page({
  data:{
    link:'',
    courseDetail:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let that=this;
    wx.request({
      url: `https://raw.githubusercontent.com/kingheshan/huangpangzi/master/doc/${options.link}.json`,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.setData({courseDetail:res.data,link:options.link})
      },
      fail: function() {
        // fail
        console.log('load fail');
      },
      complete: function() {
        // complete
      }
    })
  }
})