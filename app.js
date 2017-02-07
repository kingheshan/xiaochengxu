//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
   wx.login({
     success:(res)=>{
       console.log(res);
      if(res.code){
        wx.getUserInfo({
          success: function(res){
            console.log(res);
          }
        })
      }else{
        console.log('获取用户登陆信息失败...');
      }
     }
   })
  }
  
})