define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.init = function ($q, $cookieStore, Permission, PassportService) {
        Permission.defineRole('user', function () {
            var deferred = $q.defer();
            PassportService.getUser().success(function (data) {
                console.log('success');
                deferred.resolve();
            }).error(function () {
                deferred.reject();
            });
            return deferred.promise;
        });
    };
});
//# sourceMappingURL=user.js.map