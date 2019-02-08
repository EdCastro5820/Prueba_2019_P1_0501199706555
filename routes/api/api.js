var express = require('express');
var router = express.Router();

var usersApi = require('./api/users');
var thingsApi = require('./api/things');

router.route('/users', userApi);
router.route('/things', thingsApi);
var Prueba=[];
var _Prueba = {
    _id: uuidv4,
    empresa: 'Google',
    url: 'www.youtube.com',
    nombre:'nombre',
    year: '2019',
    rating:'5',
    fechaIng: Date
};




module.exports = router;
