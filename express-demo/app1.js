var express = require('express');
var app = express();

var router = express.Router();
router.get('/',function(req,res){
    res.send('<h1>Hello Express</h1>');
});
app.use('/home',router);

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);