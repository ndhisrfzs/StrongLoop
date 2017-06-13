import defaultRounter = require('settings/rounters/default');
import homeRounter = require('settings/rounters/home');
import accountRounter = require('settings/rounters/account');

import anonymousUser = require('settings/roles/anonymous');
import userUser = require('settings/roles/user');

import angular = require('angular');

class Settings {
    initRounter($urlRouterProvider, $stateProvider){
        defaultRounter.init.apply(this, arguments);
        homeRounter.init.apply(this, arguments);
        accountRounter.init.apply(this, arguments);
    }

    initRoles($q:ng.IQService, $cookieStore, Permission, PassportService){
        anonymousUser.init.apply(this, arguments);
        userUser.init.apply(this, arguments);
    }

    initHttpInfo($httpProvider:ng.IHttpProvider) {
        /*
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        
        $httpProvider.defaults['transformRequest'] = [function(data){
            var param = function(obj) {
                console.log('param');
                var query = '';
                var name, value, fullSubName, subName, subValue, innerObj, i;

                for(name in obj) {
                    value = obj[name];

                    if (value instanceof Date) {
                        query += encodeURIComponent(name) + '='
                            + '\/Date(' + value.getTime() + '-0000)\/' + '&';
                    }
                    else if (value instanceof Array) {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value !== undefined && value !== null) {
                        query += encodeURIComponent(name) + '='
                            + encodeURIComponent(value) + '&';
                    }
                }
                console.log(query);
            }
            console.log(angular.isObject(data) + String(data));
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
        */

        $httpProvider.interceptors.push('HttpInterceptorFactory');
    }
}

export var settings = new Settings();