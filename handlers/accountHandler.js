var util = require('../utils/util.js');

var couchbase = require('../database/couchbase.js');
var accountBucket = couchbase.get('account');
var tokenBuket = couchbase.get('token');

exports.isExists = function( data,  callback ) {
	var exists = false;
	var aid = util.generateAId( data );

	accountBucket.get( aid, function(error, result) {
		if( error && error.code === 13 ) {
			exists = false;
		} else {
			exists = true;
		}

		callback( exists );
	});
};

exports.register = function( data, callback ) {
	var aid = util.generateAId( data );

	data.create_at = new Date();
	data.device = '';
	data.delete_flg = '';

	accountBucket.set( aid, data, function(error, result) {
		if( error ) {

		} else {

		}

		callback( aid );
	});

};

exports.updateToken = function( json, callback ) {
	var token = {};

	token.create_at = new Date();
	token.update_at = new Date();
	token.token = util.generateToken(json);

	tokenBuket.set( json.aid, token, function(error, result) {
		
	});

	callback( token );
};






