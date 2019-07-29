const express = require('express');
const app = express();
const http = require("http");
const homepage = require("./homepage.js");
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/loginpage.html');
});
app.get('/homepage',(req,res)=>{
    console.log("it came");
    res.sendFile(__dirname + "/homepage.html");
});
app.get('/boxingpage',function(req,res){
  console.log('to boxingpage');
  res.sendFile(__dirname + "/boxingpage.html");
})