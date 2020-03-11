function handleBlogRouter(req,res){
    const method = req.method;
   // 请求博客列表
   if(method=='GET' && req.path=='/api/blog/list'){
       // 向数据库获取博客信息  sql
       return {
           id:'1',
           title:'标题1',
           content:'内容',
           time:'2353425345'
       }
   } 
   // 获取博客详情
   if(method=='GET' && req.path=='/api/blog/detail'){
     // 向数据库获取博客信息  sql
    return {
        id:'1',
        title:'标题1',
        content:'详情内容XXXXXXXXXXXXX',
        time:'2353425345'
    }
   }
   
   // 新增一篇博客
   if(method=='POST' && req.path=='/api/blog/new'){
    // 向数据库获取博客信息  sql
     return {
       mes: '新增博客接口'
     }
   }

   // 更新一篇博客
   if(method=='POST' && req.path=='/api/blog/update'){
    // 向数据库获取博客信息  sql
     return {
       mes: '更新博客的接口'
     }
   }

   // 删除一篇博客
   if(method=='POST' && req.path=='/api/blog/del'){
    // 向数据库获取博客信息  sql
    console.log(req.body.id);
     return {
       mes: '删除博客的接口'
     }
   }

}



module.exports=handleBlogRouter
