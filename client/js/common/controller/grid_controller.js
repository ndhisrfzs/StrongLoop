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
define(["require", "exports", "angular", "common/controller/base_controller"], function (require, exports, angular, base) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GridController = (function (_super) {
        __extends(GridController, _super);
        function GridController(args, clearToolbar) {
            if (clearToolbar === void 0) { clearToolbar = true; }
            var _this = _super.call(this, args) || this;
            //选中的数据
            _this.selected = [];
            //用于多个接口同时返回
            _this.serverInterfaces = {};
            //主toolbar上的按钮
            _this.rootToolbars = [];
            //选中后的按钮
            _this.selectToolbars = [];
            //table上的按钮
            _this.itemToolbars = [];
            _this.rowSelect = [10, 30, 50];
            _this.defQuery = {};
            _this.columns = [];
            clearToolbar && (_this.$rootScope['toolbars'] == _this.rootToolbars);
            _this.$scope.$on('$destory', function () {
                _this.abort();
            });
            return _this;
        }
        GridController.prototype.abort = function () {
            this.$http && angular.forEach(this.$http.pendingRequests, function (request) {
                if (request['cancel'] && request.timeout) {
                    request['cancel'].resolve({
                        status: 200,
                        reqult_code: -9876,
                        msg: ''
                    });
                }
            });
        };
        GridController.prototype.confirm = function (opts, serverInterface, filterData, success) {
            var _this = this;
            var confirm = this.$mdDialog.confirm()
                .title(opts.title)
                .textContent(opts.content)
                .targetEvent(opts.$event)
                .ok(opts.ok || "确定")
                .cancel(opts.cancel || "取消");
            if (this.selected.length > 0 || opts.ignoreSelection) {
                this.$mdDialog.show(confirm).then(function () {
                    _this.deferred = serverInterface(filterData(_this.selected) || _this.selected).success(function (data) {
                        opts.isRefresh && _this.getServerData();
                        _this.showMsg('执行成功!');
                        success && success.call(_this, data);
                    });
                });
            }
        };
        /*
         * 搜索
         * */
        GridController.prototype.doSearch = function (form) {
            if (form.$dirty) {
                form.$setPristine();
                this.getServerData();
                this.$sForm = form;
            }
        };
        /*
         * 显示/隐藏搜索栏
         * */
        GridController.prototype.toggleSearchBar = function () {
            var properties = ['page', 'pageCount'];
            this.searchMode = !this.searchMode;
            if (this.searchMode === false) {
                for (var p in this.queryData) {
                    if (this.queryData.hasOwnProperty(p) && !properties.some(function (property) {
                        return property == p;
                    })) {
                        this.queryData[p] = null;
                    }
                    this.queryData.where = {};
                }
                this.$sForm && this.$sForm.$submitted && ((this.$sForm = null) || true) && this.getServerData();
            }
        };
        /*
         * 拉取服务器数据
         * */
        GridController.prototype.getServerData = function () {
            var _this = this;
            if (this.isBusy)
                return;
            //this.clearSelected();
            this.isBusy = true;
            this.abort();
            this.queryData.where = angular.extend({}, this.queryData.where, this.defQuery);
            this.deferred = this.serverInterface(this.queryData).success(function (data) {
                _this.clientData = _this.dataFilter(data);
            }).finally(function () {
                //this.deferred.resolve();
                _this.isBusy = false;
            });
            return this.deferred;
        };
        /*
         * 清除选中的数据
         * */
        GridController.prototype.clearSelected = function () {
            this.selected.length = 0;
        };
        /*
         * 分页改变时候调用
         * */
        GridController.prototype.onPageChange = function (page, pageCount) {
            this.queryData.page = page;
            this.queryData.pageCount = pageCount;
            this.queryData.limit = pageCount;
            this.queryData.offset = pageCount * (page - 1);
            return this.getServerData();
        };
        /*
         * 排序改变时候调用
         * */
        GridController.prototype.onOrderChange = function (order) {
            this.queryData.order = order;
            return this.getServerData();
        };
        GridController.prototype.initColumns = function () {
        };
        GridController.prototype.initToolbar = function () {
        };
        GridController.prototype.initSearch = function () {
        };
        return GridController;
    }(base.BaseController));
    exports.GridController = GridController;
});
//# sourceMappingURL=grid_controller.js.map