
var async = require('async');
var Account = require('../handlers/accountHandler');

exports.Sign = function ( req, res ) {
	var input = {};
	var output = {};

	input.username = req.body.username;

	function done( error, data ) {
		res.json( output );
		// res.json( JSON.stringify(output) );
	};

	async.series([
			//  이미 가입한 회원인지 확인 
			function isExists(callback) {
				Account.isExists( input.username, function(exists) {
					output.isNewUser = !exists;
					callback();
				});
			},
			// 신규 유저는 가입시킴 
			function register(callback) {
				if( output.isNewUser ) {
					Account.register( input.username, function(aid) {
						output.aid = aid;
						callback();
					});
				} else {
					callback();
				}
			},
			// aid 로 토큰을 업데이트
			function updateToken(callback) {
				Account.updateToken( output.aid, function(token) {
					output.token = token;
					callback();
				});
			}
		], done);
};