//存放blog路由相关内容
function handleBlogRouter(req,res){
    const method = req.method;
    if(method=='GET'&&req.path=='/api/blog/list'){
        //向数据库获取博客信息 
        return{
            id:'111111' 
        }
    }
}

module.exports={handleBlogRouter};