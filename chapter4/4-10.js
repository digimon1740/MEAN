var events = require('events');
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();

emitter.emit('start');
emitter.emit('count', 1);
emitter.emit('count', 2);