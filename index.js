const http=require('http');
const server =http.createServer(callback);
//new chamge  
//nnn
let a=[];
function callback(req,res){
     if(req.method=="POST"){
        a.push(1);
    }else if(req.method=="PUT"){
        a[1]=2;
    }else if(req.method=="DELETE"){
        a.pop();
    }
    res.write(JSON.stringify(a));
    res.end();
  
}
server.listen(3000);