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
define(["require", "exports", "common/models/common/base_data"], function (require, exports, base) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Passport;
    (function (Passport) {
        var LoginModel = (function (_super) {
            __extends(LoginModel, _super);
            function LoginModel(data) {
                return _super.call(this, data) || this;
            }
            return LoginModel;
        }(base.Common.BaseData));
        LoginModel._schema = {
            type: "object",
            require: ['username', 'password'],
            properties: {
                username: {
                    type: 'string',
                    minLength: 6,
                    maxLength: 30,
                    title: '用户名',
                    description: ''
                },
                password: {
                    type: 'string',
                    title: '密码',
                    minLength: '6',
                    maxLength: '30',
                    description: ''
                },
                expireIn: {
                    type: 'boolean',
                    title: '记住我'
                }
            }
        };
        Passport.LoginModel = LoginModel;
    })(Passport = exports.Passport || (exports.Passport = {}));
});
//# sourceMappingURL=login_model.js.map