var express = require('express');
var router = express.Router();

var account = require('../controllers/account.js');


// POST 
router.post('/account', account.Sign );

// PUT

// GET
router.get('/health', function(req, res) {
	res.json({
		pid: process.pid,
		memory: process.memoryUsage(),
		uptime: process.uptime()
	});
});


// DELTE



module.exports = router;
