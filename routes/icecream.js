var express = require('express');
var router = express.Router();

///* GET home page. */
//router.get('/', function(req, res, next) {
//res.render('icecream', { title: 'Search Results icecream' });
//});

//ymodule.exports = router;



const icecream_controlers = require('../controllers/icecream');

/* GET costumes */

router.get('/', icecream_controlers.icecream_view_all_Page);
router.get('/icecream/:id', icecream_controlers.icecream_detail);
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

module.exports = router;

/* GET detail costume page */
router.get('/detail', secured,icecream_controlers.icecream_view_one_Page);
/* GET create costume page */
router.get('/create', secured,icecream_controlers.icecream_create_Page);

/* GET create update page */
router.get('/update', secured,icecream_controlers.icecream_update_Page);
/* GET delete costume page */
router.get('/delete', secured, icecream_controlers.icecream_delete_Page);

