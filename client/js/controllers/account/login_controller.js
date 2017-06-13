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
define(["require", "exports", "common/controller/popup_controller", "common/models/passport/login_model"], function (require, exports, base, loginModel) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Controller = (function (_super) {
        __extends(Controller, _super);
        function Controller() {
            var _this = _super.call(this, arguments) || this;
            _this.$rootScope['mainClas'] = 'layout-column';
            _this.initSchema();
            _this.resolve = {
                "loginCheck": _this.PassportService.loginCheck
            };
            _this.dialogCloseFn = function (datas) {
                _this.showMsg('登陆成功');
                _this.$state.go('home');
            };
            return _this;
        }
        Controller.prototype.initSchema = function () {
            this.schema = loginModel.Passport.LoginModel._schema;
            this.form = [
                {
                    key: 'username',
                    type: 'string',
                    icon: {
                        icon: 'person',
                    },
                    htmlClass: 'md-icon-float md-has-icon',
                    disableSuccessState: true
                }, {
                    key: 'password',
                    type: 'password',
                    icon: {
                        icon: 'lock_outline'
                    },
                    htmlClass: 'md-icon-float md-has-icon',
                    disableSuccessState: true
                }, {
                    key: 'expireIn',
                }, {
                    type: 'submit',
                    title: '登录',
                    readonly: false,
                    fieldHtmlClass: 'layout-fill',
                    icon: ''
                }
            ];
            this.formData = new loginModel.Passport.LoginModel();
        };
        return Controller;
    }(base.PopupController));
    Controller.$inject = ['$rootScope', '$scope', 'PassportService', '$q', '$mdToast', '$cookieStore', '$mdDialog', '$state'];
    Controller._name = 'LoginController';
    exports.Controller = Controller;
});
//# sourceMappingURL=login_controller.js.map