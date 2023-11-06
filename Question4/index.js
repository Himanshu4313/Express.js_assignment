const express = require("express");

const app = express();

let randomNumber =  Math.floor((Math.random() * 100) + 1);

app.get('/', (req , res) =>{
    res.send('<h1>you get Random number than go random url </h1>');
})

app.get('/random', (req , res) =>{
   res.send(`Random number is: ${randomNumber}`);
})

app.listen(8080 , () =>{
    console.log('Server is running ');
})