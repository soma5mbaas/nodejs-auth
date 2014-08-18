var express = require('express');
var router = express.Router();

var account = require('../controllers/account.js');


// POST 
router.put('/account', account.Sign );

// PUT

// GET

// DELTE



module.exports = router;
