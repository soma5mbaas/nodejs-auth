var couchbase = require('couchbase');
var ACCOUNT = require( '../config.js' ).database.ACCOUNT;
var TOKEN = require( '../config.js' ).database.TOKEN;


var bucket = new couchbase.Connection(ACCOUNT, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Couchbase Connected');

		bucket.set('kestse', {}, function(err, result){
			console.log(err);
		});
	}
});




exports.isExists = function( username,  callback ) {
	// do something
	var exists = false;
	callback( exists );
};

exports.register = function( username, callback ) {
	// do something
	var aid = 'testaid123';
	callback( aid );
};

exports.updateToken = function( aid, callback ) {
	// do something

	var token = 'testtoken123';
	callback( token );
};






