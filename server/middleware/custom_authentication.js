var http = require('http');
var Promise = require('bluebird');
var app = require('../server');

module.exports = function () {
    return function Authentication(req, res, next) {
        next();
    };
};