var fs = require('fs');

fs.readFile('README.txt', 'utf8', function(error, data) {
	if (error) {
		return console.error(error);
	}
	console.log(data);
});

try {
	var data = fs.readFileSync('README.txt', 'utf8');
	console.log(data);
} catch (e) {
	console.error(e);
}
