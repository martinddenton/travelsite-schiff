var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great!</h1>", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats!");
    }
});

var photourl = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";
https.get(photourl, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/dog.jpg"));
});