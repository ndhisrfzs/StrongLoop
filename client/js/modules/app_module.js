define(["require", "exports", "module", "angular", "settings/settings"], function (require, exports, config, angular, setting) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModule = (function () {
        function AppModule(name) {
            this.deps = config.config();
            this.module = angular.module(name, this.deps);
            this.config();
            this.run();
        }
        AppModule.prototype.config = function () {
            var _this = this;
            _this.module.config([
                '$stateProvider',
                '$urlRouterProvider',
                '$httpProvider',
                function ($stateProvider, $urlRouterProvider, $httpProvider) {
                    setting.settings.initRounter($urlRouterProvider, $stateProvider);
                    setting.settings.initHttpInfo($httpProvider);
                }
            ]);
        };
        AppModule.prototype.run = function () {
            var _this = this;
            _this.module.run([
                '$rootScope',
                '$state',
                '$stateParams',
                '$q',
                '$cookieStore',
                'Permission',
                'PassportService',
                function ($rootScope, $state, $stateParams, $q, $cookieStore, Permission, PassportService) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                    setting.settings.initRoles($q, $cookieStore, Permission, PassportService);
                }
            ]);
        };
        return AppModule;
    }());
    exports.module = new AppModule('app_module').module;
});
//# sourceMappingURL=app_module.js.map