var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.post('/save', function(req, res) {
    res.send(req.body)
})

router.get('/get-all', function(req, res) {
    res.send('sending')
})

module.exports = router;













