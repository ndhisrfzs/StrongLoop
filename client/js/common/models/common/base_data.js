define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Common;
    (function (Common) {
        var BaseData = (function () {
            function BaseData(data) {
                data && typeof data == 'object' && this.copyData(data);
            }
            BaseData.prototype.copyData = function (data) {
                for (var p in data) {
                    this[p] = data[p];
                }
            };
            return BaseData;
        }());
        Common.BaseData = BaseData;
    })(Common = exports.Common || (exports.Common = {}));
});
//# sourceMappingURL=base_data.js.map