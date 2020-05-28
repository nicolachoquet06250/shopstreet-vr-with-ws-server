var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/voiture', function(req, res, next) {
  fs.readFile(__dirname + '/../public/voiture.html', 'utf8', (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

router.get('/escalier', function(req, res, next) {
  fs.readFile(__dirname + '/../public/escalier.html', 'utf8', (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

module.exports = router;
