//处理http请求和响应
const Router=require('./src/router/blog');
const querystring=require('querystring');
function hadleServer (req,res){
    // api
    const method=req.method;
    req.path=req.url.split('?')[0];  //api/blog/list?keyword=XXX
    res.setHeader('content-type','application/json')
    req.query=querystring.parse(req.query=req.url.split('?')[1]);

    //处理博客列表请求
    const blogDate=Router.handleBlogRouter(req,res);
    res.end(JSON.stringify(blogDate));

} 

module.exports=hadleServer;

//业务模块抽离 : 一个模块做一类事