var express = require('express');
var router = express.Router();

var usersApi = require('./api/users');
var thingsApi = require('./api/things');

router.route('/users', userApi);
router.route('/things', thingsApi);






module.exports = router;
