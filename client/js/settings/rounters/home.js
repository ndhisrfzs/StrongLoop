define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.init = function ($urlRouterProvider, $stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            data: {
                permissions: {
                    only: ['user']
                }
            },
            views: {
                '': {
                    templateUrl: 'js/html/home/index.html'
                }
            }
        });
    };
});
//# sourceMappingURL=home.js.map