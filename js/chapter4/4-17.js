var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

process.on('uncaughtException', function(error) {
	console.error(error.message);
	process.exit(-1);
    console.log('process running?')
});

emitter.emit('error', new Error('out error is bad and we feel bad'));