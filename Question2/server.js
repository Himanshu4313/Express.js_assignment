const express = require('express');

const app = express();

const port = 8080;
const hostname = 'localhost';



app.listen(port , () =>{
    console.log(`Server is running at ${hostname}:${port}`);
})