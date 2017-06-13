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
        var QueryBase = (function (_super) {
            __extends(QueryBase, _super);
            function QueryBase(data) {
                var _this = _super.call(this, data) || this;
                _this.page = 1;
                _this.pageCount = 10;
                _this.where = {};
                _this.include = [];
                _this.offset = 0;
                _this.limit = 10;
                _this.filter = {};
                return _this;
            }
            return QueryBase;
        }(base.Common.BaseData));
        Common.QueryBase = QueryBase;
    })(Common = exports.Common || (exports.Common = {}));
});
//# sourceMappingURL=query_base.js.map