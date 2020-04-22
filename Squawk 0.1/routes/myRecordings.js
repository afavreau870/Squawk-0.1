'use strict';
var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {

    res.render('myrecordings', {
        "show": 'Hello',
        "title": 'recordings'
    })
});

module.exports = router;