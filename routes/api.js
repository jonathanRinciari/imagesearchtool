var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Instructions for API Usage')
})

router.get('/imagesearch/:query', function(req, res){
    res.send(`Searching for ${req.params.query}`)
})

router.get('/latest', function(req, res){
    res.send('returning latest searches')
})
module.exports = router;