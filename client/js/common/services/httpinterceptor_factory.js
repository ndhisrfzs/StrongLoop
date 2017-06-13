define(["require", "exports", "angular"], function (require, exports, angular) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpInterceptorFactory = (function () {
        function HttpInterceptorFactory() {
        }
        return HttpInterceptorFactory;
    }());
    HttpInterceptorFactory._name = 'HttpInterceptorFactory';
    HttpInterceptorFactory.factory = ['$rootScope', '$q', '$cookieStore', function ($rootScope, $q, $cookieStore) {
            return {
                'request': function (httpConfig) {
                    var deferred;
                    if (httpConfig.needToken === true) {
                        if (httpConfig.url.indexOf('?') > 0) {
                            httpConfig.url += '$access_token=' + $cookieStore.get('access_token');
                        }
                        else {
                            httpConfig.url += '?access_token=' + $cookieStore.get('access_token');
                        }
                    }
                    if (httpConfig.needCancel === true) {
                        deferred = $q.defer();
                        httpConfig.timeout = deferred.promise;
                        httpConfig.cancel = deferred;
                    }
                    return httpConfig;
                },
                'responseError': function (response) {
                    if (response.data.error) {
                        $rootScope.$emit('showError', 'error', response.data.error.message);
                    }
                    else {
                        switch (response.status) {
                            case 0:
                                $rootScope.$emit('showError', 'error', 'net:ERR_CONNECTION_REFUSED');
                                break;
                            case 404:
                                $rootScope.$emit('showError', 'error', '404');
                                break;
                            case 400:
                                $rootScope.$emit('showError', 'error', response.data.error ? response.data.error.message : 400);
                                break;
                            case 500:
                                $rootScope.$emit('showError', 'error', '500');
                                break;
                            default:
                                console.log(response.status);
                        }
                    }
                    return $q.reject(response);
                },
                'response': function (response) {
                    if (response.status == 200 && response.data instanceof Object) {
                        if (angular.isNumber(response.data.result_code) && response.data.result_code != 1) {
                            switch (response.data.result_code) {
                                case -1601:
                                case -1602:
                                case -2201:
                                case -2202:
                                    $rootScope.$emit('userIntercepted', 'notLogin', response);
                                    break;
                                case -9876:
                                    return $q.reject(response);
                                default:
                                    break;
                            }
                            $rootScope.$emit('showError', 'error', response.data.msg);
                            return $q.reject(response);
                        }
                    }
                    return response;
                }
            };
        }];
    exports.HttpInterceptorFactory = HttpInterceptorFactory;
});
//# sourceMappingURL=httpinterceptor_factory.js.map