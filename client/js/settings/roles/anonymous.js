define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.init = function ($q, $cookieStore, Permission, PassportService) {
        Permission.defineRole('anonymous', function ($stateParams) {
            if (!$cookieStore.get('access_token')) {
                return true;
            }
            return false;
        });
    };
});
//# sourceMappingURL=anonymous.js.map