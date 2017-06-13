var http = require('http');
var Promise = require('bluebird');
var app = require('../server');
var url = require('url');

module.exports = function () {
   
    function getUser(accessToken) {
         /*
        return new Promise(function (resolve, reject) {
            var options = {
                hostname: 'pt.p7game.com',
                port: 80,
                path: '/api/v1/get_user?access_token=' + accessToken,
                method: 'GET',
                timeout: 2
            };
            var chunks = [];
            var err;
            var req = http.request(options, function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    chunks.push(chunk);
                });
                res.on('end', function () {
                    var chunk = JSON.parse(chunks.join(''));
                    if (chunk.result_code !== 1) {
                        err = new Error(chunk.message || '登录状态已经过期,请重新登录!');
                        err.status = 403;
                        reject(err);
                    } else {
                        resolve(chunk);
                    }
                });
            });
            req.on('error', reject);
            req.end();
        });

        */
        return new Promise(function (resolve, reject) {
            app.models.Person.findOne({
                where: {
                    access_token: accessToken
                }
            }).then(function (model) {
                console.log(model);
                console.log(accessToken);
                if (model == null) {
                    var err = new Error('登录状态已经过期,请重新登录!');
                    err.status = 403;
                    err.result_code = -2202;
                    reject(err);
                } else {
                    model.result_code = 1;
                    resolve(model);
                }
            }).catch(function(){
                reject();
            });
        });
    }
     

    return function Authentication(req, res, next) {
        var uri = url.parse(req.path),
            err, idx = uri.pathname.lastIndexOf('.');

        if(uri.pathname==='/'){
            next();
            return;
        }

        switch (uri.pathname.substring(idx + 1)) {
            case 'js':
            case 'ts':
            case 'map':
            case 'css':
            case 'html':
            case 'png':
            case 'ico':
            case 'jpg':
            case 'manifest':
                next();
                return;
        }

        getUser(req.query.access_token).then(function (data) {
                next(null, data);
            }, next);
/*
        app.models.Person.findOne({
            where: {
                userToken: req.query.access_token
            }
        }).then(function (model) {
            if (model == null) {
                err = new Error('此账号没有权限!');
                next(err);
                return;
            }
            
        }, next);
        */
    };
   
};