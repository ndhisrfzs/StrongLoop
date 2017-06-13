define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PassportService = (function () {
        function PassportService() {
        }
        return PassportService;
    }());
    PassportService._name = 'PassportService';
    PassportService.factory = ['$rootScope', '$q', '$http', function ($rootScope, $q, $http) {
            return {
                loginCheck: function (loginMdl) {
                    var promise = $http({
                        method: 'POST',
                        url: 'api/People/login',
                        data: {
                            username: loginMdl.username,
                            password: loginMdl.password,
                            expire_in: loginMdl.expireIn ? 60000 : 0,
                        }
                    }).success(function (data) {
                        console.log(arguments);
                    });
                    return promise;
                },
                getUser: function () {
                    var promise = $http({
                        method: 'POST',
                        url: 'api/People/get_user',
                        needToken: true
                    }).success(function (data) {
                        if (data.result_code == 1) {
                            $rootScope.$emit('userInfo', data);
                        }
                    });
                    return promise;
                }
            };
        }];
    exports.PassportService = PassportService;
});
//# sourceMappingURL=passport_service.js.map