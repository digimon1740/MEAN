var fs = require('fs');
var readStream = fs.createReadStream('foo.txt');
var writeStream = fs.createWriteStream('bar.txt');

readStream.pipe(writeStream,{end:false});
readStream.on('end',function() {
	console.log('end');
});
writeStream.on('end',function() {
	console.log('writestream end');
});