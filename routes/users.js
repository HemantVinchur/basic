var express = require('express');
var router = express.Router();
const services = require('../services/userServices');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    let userData = await services.getUser();
    console.log(userData);
    res.render('index', { title: userData.name });
});

module.exports = router;