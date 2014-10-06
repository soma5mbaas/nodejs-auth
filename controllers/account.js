
var async = require('async');
var Account = require('../handlers/accountHandler');
var getHeader = require('haru-nodejs-util').common.getHeader;

// timeZone: The current time zone where the target device is located.
// deviceType: The type of device, "ios", "android", "winrt", "winphone", or "dotnet"(readonly).
// pushType: This field is reserved for directing Parse to the push delivery network to be used. If the device is registered to receive pushes via GCM, this field will be marked "gcm". If this device is not using GCM, and is using Parse's push notification service, it will be blank (readonly).
// installationId: Universally Unique Identifier (UUID) for the device used by Parse. It must be unique across all of an app's installations. (readonly).
// deviceToken: The Apple or Google generated token used to deliver messages to the APNs or GCM push networks respectively.
// channelUris: The Microsoft-generated push URIs for Windows devices.
// appName: The display name of the client application to which this installation belongs.
// appVersion: The version string of the client application to which this installation belongs.
// sdkVersion: The version of the Parse SDK which this installation uses.
// appIdentifier: A unique identifier for this installation's client application. In iOS, this is the Bundle Identifier.

function getAPIInfo( req ) {
	var api = {};

	if( api.id = req.get('Rest-API-Id') ) {
		api.type = 'rest';
	} else if( api.id = req.get('Android-API-Id') ) {
		api.type = 'android';
	} else if( api.id = req.get('Ios-API-Id') ) {
		api.type = 'ios';
	} else if( api.id = req.get('Javascript-API-Id') ) {
		api.type = 'javascript';
	}

	return api;
};

exports.Sign = function ( req, res ) {
	var input = getHeader(req);
	var output = {};

	input.user_id = req.get('User-Id');

	input.aid = req.body.aid;

	output.writeServer = config.writeServer;
	output.readServer = config.readServer;
	output.pushServer = config.pushServer;

	function done( error, data ) {
		res.jsonp( output );
	};

	async.series([
			// block 유저인가?
			function block(callback) {
				callback();
			},
			//  이미 가입한 회원인지 확인 
			function isExists(callback) {
				Account.isExists( input, function(exists) {
					output.isNewUser = !exists;
					callback();
				});
			},
			// 신규 유저는 가입시킴 
			function register(callback) {
				if( output.isNewUser ) {
					Account.register( input, function(aid) {
						output.aid = aid;
						callback();
					});
				} else {
					// 기존 유저는 aid를 받아온옴 
					if( input.aid ) {
						output.aid = input.aid;
					}
					callback();
				}
			},
			// aid 로 토큰을 업데이트
			function updateToken(callback) {
				Account.updateToken( output, function(token) {
					output.token = token;
					callback();
				});
			}
		], done);
};