// 处理用户相关的路由
function handleUserRouter(req,res){
    const method=req.method;
    console.log(req.body);
    if(method=='POST' && req.path=='/api/user/login'){
        return {
          mes: '登陆的接口'
        }
    }  
}

module.exports = handleUserRouter;
