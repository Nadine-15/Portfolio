var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

module.exports = router;
