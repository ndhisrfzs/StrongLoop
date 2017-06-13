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
        var UserModel = (function (_super) {
            __extends(UserModel, _super);
            function UserModel(data) {
                return _super.call(this, data) || this;
            }
            return UserModel;
        }(base.Common.BaseData));
        UserModel._schema = {
            type: 'object',
            description: '用户',
            require: ['nickname'],
            properties: {
                username: {
                    type: 'string',
                    title: '用户登录名'
                },
                nickname: {
                    type: 'string',
                    title: '昵称'
                },
                avatarUrl: {
                    type: 'string',
                    title: '头像'
                },
                mobile: {
                    type: 'string',
                    title: '手机'
                },
                email: {
                    type: 'string',
                    tilte: '邮箱'
                },
                userToken: {
                    type: 'string',
                    tilte: '用户标识'
                }
            }
        };
        Passport.UserModel = UserModel;
    })(Passport = exports.Passport || (exports.Passport = {}));
});
//# sourceMappingURL=user_model.js.map