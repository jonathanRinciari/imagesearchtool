var express = require('express');
var router = express.Router();
var api_controller = require('../controllers/api_controllers')

router.get('/', api_controller.api_index)

router.get('/imagesearch', api_controller.search_redirect)

router.get('/imagesearch/:query', api_controller.image_search)

router.get('/latest', api_controller.search_history)

module.exports = router;