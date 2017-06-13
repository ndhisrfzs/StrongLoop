define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.init = function ($urlRounterProvider, $stateProvider) {
        $stateProvider
            .state('account', {
            url: '/login',
            data: {
                permissions: {
                    only: ['anonymous']
                }
            },
            views: {
                '': {
                    templateUrl: 'js/html/account/index.html'
                },
                'accountView@account': {
                    templateUrl: 'js/html/account/login.html',
                    controller: 'LoginController',
                    controllerAs: 'loginCtl'
                }
            }
        });
    };
});
//# sourceMappingURL=account.js.map