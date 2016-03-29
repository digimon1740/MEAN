var express = require('express');
var router = express.Router();

var app = require('../app');

app.use('/users',router);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
