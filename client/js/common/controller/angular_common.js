define(["require", "exports", "angular"], function (require, exports, angular) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AngularCommon = (function () {
        function AngularCommon(args) {
            this.initInvoke(this.constructor.$inject, args);
        }
        AngularCommon.prototype.initInvoke = function ($inject, args) {
            var _this = this;
            angular.forEach($inject, function (value, key) {
                _this[value] = args[key];
            });
        };
        return AngularCommon;
    }());
    exports.AngularCommon = AngularCommon;
});
//# sourceMappingURL=angular_common.js.map