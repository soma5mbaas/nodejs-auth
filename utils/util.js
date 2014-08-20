var jwt = require('jwt-simple');
var secret = 'xxx';

/*
// encode
var token = jwt.encode(payload, secret);
console.log(token);

// decode
var decoded = jwt.decode(token, secret);
console.log(decoded);
*/


exports.generateToken = function( json ) {
	var token = jwt.encode(json, secret);

	return token;
};

exports.generateAId = function( data ) {
	return data.application_id +':'+ data.api.id+':'+ data.api.type + ':' + data.user_id;
};