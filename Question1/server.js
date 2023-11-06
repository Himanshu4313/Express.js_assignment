const http = require('http');

const port = 80;
const hostname = 'localhost';

const server = http.createServer((req , res) =>{
    if(req.url == '/'){
       res.statusCode = 200;
       res.setHeader("content-type","text/html");
       res.end("<h1>Welcome to men and women dummy data</h1>");
    }else if(req.url == '/men'){
       // show 10 product data of men
       const option = {
             hostname : 'fakestoreapi.com',
             path : `/products/category/men's%20clothing?limit=10`,
             method : 'GET'
             
       }
        const req =  http.request(option , (apireq) =>{
              apireq.on('data' , (data) =>{
                //  console.log(data.toString());
                res.statusCode = 200;
                res.setHeader('content-type','application/json');
                res.end(data.toString());      
            })
        })
        req.on('error' , () =>{
            console.log(error);
        })
        req.end();
    }else if(req.url == '/women'){
        // show 10 product data of women
        const option = {
            hostname : 'fakestoreapi.com',
            path : `/products/category/women's%20clothing?limit=10`,
            method : 'GET'
            
      }
       const req =  http.request(option , (apireq) =>{
             apireq.on('data' , (data) =>{
               //  console.log(data.toString());
               res.statusCode = 200;
               res.setHeader('content-type','application/json')
               res.end(data.toString());      
           })
       })
       req.on('error' , () =>{
           console.log(error);
       })
       req.end();
    }else{
        res.statusCode = 500;
        res.setHeader('content-type','text/html');
        res.end("<h2>This page is not found</h2>");
    }
})

server.listen(port , () =>{
    console.log(`Server is running at ${hostname}:${port}`);
})