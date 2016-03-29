var mongoose = require('mongoose');
var dbUrl = 'mongodb://devsh:1740@127.0.0.1:27017/humanresources';

var options = {
    user: 'devsh',
    pass: '1740',
    auth: {
        authdb: 'admin'
    }
};
mongoose.connect(dbUrl,options);

// Ctrl+C를 누르면 몽구스 연결 종료
process.on('SIGINT', function () {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected');
        process.exit();
    });
});

require('../models/employee');
require('../models/team');