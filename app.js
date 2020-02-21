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
var firstName = req.body.fName;
var lastName = req.body.lName;
var email = req.body.email;
});

--data '{"name":"Freddie'\''s Favorite Hats","contact":{"company":"Mailchimp","address1":"675 Ponce De Leon Ave NE","address2":"Suite 5000","city":"Atlanta","state":"GA","zip":"30308","country":"US","phone":""},"permission_reminder":"You'\''re receiving this email because you signed up for updates about Freddie'\''s newest hats.","campaign_defaults":{"from_name":"Freddie","from_email":"freddie@freddiehats.com","subject":"","language":"en"},"email_type_option":true}
app.listen(3000, function(){
	console.log("server is running on port 3000");
});


// 88745c0a37317909866f051ba7d88a1f-us4

// list id
// 55479a6e11