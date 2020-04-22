'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    res.render('airports', {
        "show": 'Hello',
        "title": 'Airports'
    })
});



module.exports = router;


