var fs = require('fs');

fs.readFile(__filename, function (error, data) {
	if (error) {
		return console.error(error.message);
	}
	console.log('readFile=========================');
	console.log(data);
});

// 5-6
var data;

try {
	data = fs.readFileSync(__filename);
	console.log('readFileSync=====================');
	console.log(data);
} catch (error) {
	console.error(error.message);
}

// 5-7
fs.readFile(__filename, {
	encoding: 'utf8',
}, function (error, data) {
	if (error) {
		return console.error(error.message);
	}
	console.log('readFile=========================');
	console.log(data);
});