const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/signup.html")
});
app.post("/",function(req, res){

});
app.listen(3000, function(){
	console.log("server is running on port 3000");
});


// 88745c0a37317909866f051ba7d88a1f-us4

// list id
// 55479a6e11