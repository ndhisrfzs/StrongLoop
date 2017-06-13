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
    var Common;
    (function (Common) {
        var ToolbarItem = (function (_super) {
            __extends(ToolbarItem, _super);
            function ToolbarItem(data) {
                var _this = _super.call(this, data) || this;
                _this.children = [];
                return _this;
            }
            return ToolbarItem;
        }(base.Common.BaseData));
        Common.ToolbarItem = ToolbarItem;
    })(Common = exports.Common || (exports.Common = {}));
});
//# sourceMappingURL=toolbar_item.js.map