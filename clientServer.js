const express = require('express');
const app = express();
// const ipfilter = require('express-ipfilter').IpFilter
// const ips = ['10.9.0.104'];
// app.use(ipfilter(ips,{mode:'allow'}));
app.use(express.static(__dirname + '/public'));

// start the express web server listening on 8080
app.listen(8080, "0.0.0.0",() => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/loginpage.html');
});
app.get('/homepage',(req,res)=>{
    res.sendFile(__dirname + "/public/homepage.html");
});
app.get('/boxingpage',function(req,res){
  res.sendFile(__dirname + "/public/boxingpage.html");
});
app.get('/labelingpage',function(req,res){
  res.sendFile(__dirname + "/public/labelingpage.html");
});