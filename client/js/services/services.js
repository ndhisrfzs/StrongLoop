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
define(["require", "exports", "common/services/services"], function (require, exports, common) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Services = (function (_super) {
        __extends(Services, _super);
        function Services(module) {
            return _super.call(this, module) || this;
        }
        return Services;
    }(common.Services));
    exports.Services = Services;
});
//# sourceMappingURL=services.js.map