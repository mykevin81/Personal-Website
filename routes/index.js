var express = require('express');
var api = require('./projects');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/api', api.showAllProjects);

module.exports = router;
