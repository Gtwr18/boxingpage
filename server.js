const express = require('express');
const app = express();
app.all('/*', function(req, res, next) {
    console.log("c");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
app.get('/api/boxing/3',function(req,res){
    console.log('1');
    let data = {
        'username' : 'park',
        'id' : 3,
        'imageurl' : '../../그림/image.png',
        'count1' : 2,
        'count2' : 100,
        'next_id' : 4,
        'prev_id' : 2,
        'valid_next_id' : 2,
        'valid_prev_id' : 2
    }
    JSON.stringify(data);
    res.status(200).send(data);
});
app.get()
app.get('/',function(req,res){
    res.send("good!");
});
app.listen(3000,function(){
});