#BLOG 笔记 新增promise 
resolve成功 reject失败 promise原意是承诺
// var promise=new promise(function(resolve,reject){
//     fs.readFile('./1.txt',function(err,data){
//         if(err){
//             reject('读取文件失败'+err)
//         }else{
//             resolve(data);
//         }
//     });
// });
// promise.then(function(d){
//     console.log(d);
// },function(err){
//     console.log(err);
// });


function read(url){
    const promise=new Promise(function(resolve,reject){
        fs.readFile(url,function(){
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        });
    });
    return promise;
}
read('1.txt').then(function(d){
   return read(d);
}).then(function(d){
    return read(d);
}).then(function(d){
    console.log(d.toString());
});
 1.txt内容2.txt 
 2.txt内容3.txt
 3.txt内容helloword
