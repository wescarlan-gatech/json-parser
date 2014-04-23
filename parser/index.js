// include required libraries
var q = require("q"),
	fs = require("fs");

exports.parseJSON = function(filename) {
	// wrap fs.readFile as a promised function using q
	var readFile = q.nfbind(fs.readFile);
	readFile(filename)
	.then(function (data) {
		var d = JSON.parse(data);
		console.dir(d);
	});
}