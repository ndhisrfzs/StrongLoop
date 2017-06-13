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
define(["require", "exports", "common/directives/directives", "directives/root_directive"], function (require, exports, common, root) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Directives = (function (_super) {
        __extends(Directives, _super);
        function Directives(module) {
            var _this = _super.call(this, module) || this;
            module
                .directive(root.Directive._name, root.Directive.directive);
            return _this;
        }
        return Directives;
    }(common.Directives));
    exports.Directives = Directives;
});
//# sourceMappingURL=directives.js.map