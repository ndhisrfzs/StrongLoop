define(["require", "exports", "controllers/account/login_controller", "controllers/home/index_controller"], function (require, exports, login, index) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Controllers = (function () {
        function Controllers(module) {
            module
                .controller(login.Controller._name, login.Controller)
                .controller(index.Controller._name, index.Controller);
        }
        return Controllers;
    }());
    exports.Controllers = Controllers;
});
//# sourceMappingURL=controllers.js.map