define(["require", "exports", "settings/rounters/default", "settings/rounters/home", "settings/rounters/account", "settings/roles/anonymous", "settings/roles/user"], function (require, exports, defaultRounter, homeRounter, accountRounter, anonymousUser, userUser) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Settings = (function () {
        function Settings() {
        }
        Settings.prototype.initRounter = function ($urlRouterProvider, $stateProvider) {
            defaultRounter.init.apply(this, arguments);
            homeRounter.init.apply(this, arguments);
            accountRounter.init.apply(this, arguments);
        };
        Settings.prototype.initRoles = function ($q, $cookieStore, Permission, PassportService) {
            anonymousUser.init.apply(this, arguments);
            userUser.init.apply(this, arguments);
        };
        Settings.prototype.initHttpInfo = function ($httpProvider) {
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
        };
        return Settings;
    }());
    exports.settings = new Settings();
});
//# sourceMappingURL=settings.js.map