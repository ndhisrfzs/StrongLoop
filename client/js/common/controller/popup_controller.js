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
    var PopupController = (function (_super) {
        __extends(PopupController, _super);
        function PopupController(args) {
            var _this = _super.call(this, args) || this;
            _this.isBusy = false;
            return _this;
        }
        PopupController.prototype.getDetailInfo = function (interfaces, needData) {
            var _this = this;
            if (needData === void 0) { needData = false; }
            var promises = {};
            if (this.isBusy)
                return;
            this.isBusy = true;
            angular.forEach(interfaces, function (fn, key) {
                if (needData) {
                    promises[key] = fn(this.currentItem || {});
                }
                else {
                    promises[key] = fn();
                }
            }).bind(this);
            return this.$q.all(promises)
                .finally(function () {
                _this.isBusy = false;
            });
        };
        PopupController.prototype.submit = function ($form, serverData) {
            var _this = this;
            var promises = {};
            this.$rootScope.$broadcast('schemaFormValidate');
            if ($form.$dirty && $form.$valid && !this.isBusy) {
                angular.forEach(this.resolve, function (fn, key) {
                    promises[key] = fn(serverData || _this.formData);
                });
                this.$promise = this.$q.all(promises);
                if (this.resolve && this.$promise) {
                    this.managerGrid && (this.managerGrid.isBusy = true);
                    this.isBusy = true;
                    this.$promise.then(function (datas) {
                        $form.$setPristine();
                        if (_this.dialogCloseFn) {
                            _this.dialogCloseFn(datas);
                        }
                        else {
                            _this.alert(_this.schema.description, _this.content).finally(function () {
                                _this.managerGrid && _this.managerGrid.getServerData && _this.managerGrid.getServerData();
                            });
                        }
                    }).finally(function () {
                        _this.managerGrid && (_this.managerGrid.isBusy = false);
                        _this.isBusy = false;
                        _this.$promise = null;
                    });
                }
            }
            if (!$form.$valid) {
                this.showErrMsg("表单填写不正确,请查看红色的表单项!");
            }
        };
        return PopupController;
    }(base.BaseController));
    exports.PopupController = PopupController;
});
//# sourceMappingURL=popup_controller.js.map