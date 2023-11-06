const express = require('express');

const app = express();

app.get('/',(req , res) =>{
    res.send('I am homepage');
})

app.get('/about',(req , res) =>{
    res.send('I am aboutpage');
})

app.get('/contact',(req , res) =>{
    res.send('email:pwskill@gmail.com');
})
app.listen(8080 , () =>{
    console.log('Server is running')
})
