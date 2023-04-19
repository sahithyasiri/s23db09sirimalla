var express = require('express');
var router = express.Router();

///* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('icecream', { title: 'Search Results icecream' });
//});

//ymodule.exports = router;



const icecream_controlers= require('../controllers/icecream');

/* GET costumes */

router.get('/', icecream_controlers.icecream_view_all_Page );

module.exports = router;
/* GET detail costume page */
router.get('/detail', icecream_controlers.icecream_view_one_Page);