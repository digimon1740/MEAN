//  4-18
var promise = new Promise(function(resolve, reject) {
	var success = true;

	if (success) {
		resolve('promise fulfilled');
	} else {
		resolve(new Error('promise rejected'));
	}
});

//  4-19
var fs = require('fs');
var promise = new Promise(function(resolve, reject) {
	fs.readFile('README.txt', 'utf8', function(error, data) {
		if (error) {
			return reject(error);
		}
		resolve(data);
	});
});

//  4-20
promise.then(function(result) {
	console.log(result);
}, function(error) {
	console.error(error.message);
});

//  4-21
promise.then(function(result) {
	console.log(result);
});

//  4-22
promise.then(function(result) {
	console.log(result);
	return 'THE END!';
}).then(function(result) {
	console.log(result);
});

//  4-23
promise.then(function(result) {
	console.log(result);
	return 'THE END!';
}).catch(function(result) {
	console.log(result);
});

//  4-24
promise.then(function(result) {
    console.log(result);
}).catch(function(result) {
    console.log(result);
}).then(function() {
    console.log('THE END!');
});