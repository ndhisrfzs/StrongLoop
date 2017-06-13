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
define(["require", "exports", "common/filters/filters"], function (require, exports, common) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Filters = (function (_super) {
        __extends(Filters, _super);
        function Filters(module) {
            return _super.call(this, module) || this;
        }
        return Filters;
    }(common.Filters));
    exports.Filters = Filters;
});
//# sourceMappingURL=filters.js.map