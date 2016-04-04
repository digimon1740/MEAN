var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('error', function(error) {
	console.error(error.message);
});

emitter.emit('error', new Error('our error is bad and we feel bad'));
