const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/signup.html")
});
app.get("/failure", function(req, res){
	res.redirect("/");
});
app.post("/",function(req, res){
var firstName = req.body.fName;
var lastName = req.body.lName;
var email = req.body.email;
const data = {
		members: [
			{
				email_address: email,
				status : "subscribed",
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName
				}	
			}
		]
	};
	const jsonData = JSON.stringify(data);
	const url = 'https://us5.api.mailchimp.com/3.0/lists/55479a6e11';
	const options = {
		method: "POST",
		auth: "manu1:88745c0a37317909866f051ba7d88a1f-us4"

	}
	const request = https.request(url, options, function(response) {
		response.on("data", function(data){
			console.log(JSON.parse(data));
		});
		if (response.statusCode === 200) {
			res.sendFile(__dirname + "/public/success.html")
		} else {
			res.sendFile(__dirname + "/public/failure.html")
		}
	})

	request.write(jsonData);
	request.end();
});



app.listen(3000, function(){
	console.log("server is running on port 3000");
});


// 88745c0a37317909866f051ba7d88a1f-us4

// list id
// 55479a6e11