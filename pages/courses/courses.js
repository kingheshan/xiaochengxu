Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(){
    let that=this;
    wx.request({
      url: 'https://raw.githubusercontent.com/kingheshan/huangpangzi/master/doc/index.json',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res);
        that.setData({courses:res.data.published});
      },
      fail: function() {
        console.log('load fail');
      }
    })
  }
  
  
  
 
})