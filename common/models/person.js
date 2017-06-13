'use strict';

var async = require('async');
var md5 = require('blueimp-md5');

module.exports = function(Person) {
	Person.getUser = function(req, next) {
		async.auto({
			person: [function(cb) {
				Person.findOne({
					where: {
						access_token: req.query.access_token ? req.query.access_token : ""
					}
				}, cb);
			}],
			check: ['person', function(cb, results) {
				var person = results.person;
				if(person == null) {
					person = {};
					person.result_code = -2202;
				} else {
					person.result_code = 1;
				}
				cb(null, person);
			}]
		}, function finish(err, results) {
			if(err) {
				next(err);
			} else {
				next(null, results.person);
			}
		});
	};
	Person.remoteMethod(
		'getUser', {
			accepts: [{args: 'req', type: 'object', http: {source:'req'}}],
			returns: {root: true, type: 'object'},
			http: {verb: 'post', path: '/get_user'}
		}
	);

	Person.login = function (req, data, next) {
		async.auto({
			model: [function(cb) {
				Person.findOne({
					where: {
						account: data.username
					}
				}, cb);
			}],
			check: ['model', function(cb, results){
				var person = results.model;
				var access_token = md5(data.username + data.password);
				if(person != null && person.password == data.password){
					person.access_token = access_token;
					Person.dataSource.connector.execute('update Person set access_token=(?) where account=(?) and password=(?)', [access_token, data.username, data.password], cb);
					cb(null, person);
				} else {
					cb(null, null);
				}
			}]
		}, function finish(err, results){
			if(err) {
				next(err);
			} else {
				if(results.check != null) {
					var ret = {};
					ret.access_token = results.check.access_token;
					next(null, ret);
				} else {
					next(null, null);
				}
			}
		});
	}

	Person.remoteMethod(
		'login', {
			accepts: [
				{arg: 'req', type:'object', http: {source: 'req'}},
				{arg: 'data', type: 'object', http: {source: 'body'}}
			],
			returns: {root: true, type: 'object'},
			http: {verb: 'post', path: '/login'}
		}
	);
};
