var md5 = require('MD5');
var uid = require('uid2');
var secret = 'xxx';

// use md5
exports.generateToken = function( json ) {
    // var token = md5(json.aid);
    var token = uid(10);

    return token;
};


exports.generateAId = function( data ) {
    return data.application_id +':'+ data.api.id+':'+ data.api.type + ':' + data.user_id;
};


