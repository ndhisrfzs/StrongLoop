var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "common/controller/base_controller", "common/models/passport/user_model"], function (require, exports, base, userModel) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Directive = (function (_super) {
        __extends(Directive, _super);
        function Directive() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Directive;
    }(base.BaseController));
    Directive._name = 'root';
    Directive.directive = ['$rootScope', '$timeout', '$state', '$cookieStore', '$mdSidenav', '$mdToast', '$mdUtil', '$mdDialog',
        function ($rootScope, $timeout, $state, $cookieStore, $mdSidenav, $mdToast, $moUttil, $mdDialog) {
            var directive = {}, con;
            base.BaseController.$inject = ['$rootScope', '$timeout', '$state', '$cookieStore', '$mdSidenva', '$mdToast', '$mdUtil'];
            con = new base.BaseController(arguments);
            directive.link = function ($scope) {
                $rootScope.$on('userIntercepted', function (state, ename, data) {
                    $cookieStore.remove('access_token');
                    $cookieStore.remove('refresh_token');
                    $mdDialog.cancel(null);
                    $state.go('account');
                });
                $rootScope.user = new userModel.Passport.UserModel({
                    nickname: '未设置',
                    avatarUrl: ''
                });
                $rootScope.$on('userInfo', function (event, data) {
                    $rootScope.user.nickname = data.nickname;
                    $rootScope.user.avatarUrl = data.avatarUrl;
                    $rootScope.user.email = data.email;
                    $rootScope.user.mobile = data.mobile;
                    $rootScope.user.userToken = data.userToken;
                });
                $rootScope.$on('showError', function (state, ename, data) {
                    con.showError(data);
                });
                $rootScope.isEmptyObject = function (obj) {
                    for (var name in obj) {
                        return false;
                    }
                    return true;
                };
            };
            return directive;
        }];
    exports.Directive = Directive;
});
//# sourceMappingURL=root_directive.js.map