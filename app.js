//处理http 请求和响应
const handleBlogRouter=require('./src/router/blog');
const handleUserRouter=require('./src/router/user');
const querystring= require('querystring');

// 封装promise 获取 post提交的数据
function getPostDate(req){
  const method=req.method;
  const promise=new Promise(function(resolve,reject){
     if(method !== "POST"){
      resolve({});
      return;
     }
     // 客户端post发送数据的时候，只能发送json数据
     if(req.headers['content-type']!== 'application/json'){
        resolve({});
        return;
     }
     var postData=''; 
     req.on('data',function(data){
        postData+=data;
     });
     req.on('end',function(){
        if(!postData){
           resolve({});  
           return;
        }
        resolve(JSON.parse(postData));
     });

  });
  return promise;
}

function handleServer (req,res){
   res.setHeader('Content-type','application/json');
   const method=req.method;
   req.path= req.url.split('?')[0];  // /api/blog/list
   // get数据
   req.query=querystring.parse( req.url.split('?')[1] );  // { keyword:XXX,id:1}
   
   getPostDate(req).then(function(postData){
         // post数据 
         req.body=postData; 
         // 处理博客请求
         const blogData=handleBlogRouter(req,res);
         if(blogData){
            res.end(JSON.stringify(blogData));
            return;
         }
         // 处理用户（登陆，注册）
         const userDate=handleUserRouter(req,res);
         if(userDate){
            res.end( JSON.stringify(userDate) );
            return;
         }
         // 不存在的接口
         res.writeHead('404',{'Content-type':'text/plain'});
         res.write('404 not found');
         res.end();
      
   });

}

module.exports = handleServer;
//处理http请求和响应
//const Router=require('./src/router/blog');
//const querystring=require('querystring');
//function hadleServer (req,res){
    // api
    //const method=req.method;
    //req.path=req.url.split('?')[0];  //api/blog/list?keyword=XXX
    //res.setHeader('content-type','application/json')
    //req.query=querystring.parse(req.query=req.url.split('?')[1]);

    //处理博客列表请求
  //  const blogDate=Router.handleBlogRouter(req,res);
  //  res.end(JSON.stringify(blogDate));

//} 

//module.exports=hadleServer;

//业务模块抽离 : 一个模块做一类事
