var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Instructions for API Usage')
})

module.exports = router;