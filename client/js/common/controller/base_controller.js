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
define(["require", "exports", "common/controller/angular_common"], function (require, exports, angularCommon) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseController = (function (_super) {
        __extends(BaseController, _super);
        function BaseController(args) {
            return _super.call(this, args) || this;
        }
        /*
         * 阻止默认事件
         * */
        BaseController.prototype.preventDefault = function ($event) {
            $event && ($event.defaultPrevented == true) && $event.preventDefault();
            return true;
        };
        /*
        * 阻止冒泡
        * */
        BaseController.prototype.stopPropagation = function ($event) {
            $event && ($event.cancelBubble == true);
            return true;
        };
        BaseController.prototype.close = function () {
            this.$mdDialog && this.$mdDialog.cancel();
        };
        /*
        * 阻止默认事件  +  阻止冒泡
        * */
        BaseController.prototype.stopAll = function ($event) {
            this.preventDefault($event) && this.stopPropagation($event);
        };
        /*
         * 弹出信息
         * */
        BaseController.prototype.alert = function (title, content) {
            var alert = this.$mdDialog.show(this.$mdDialog.alert()
                .clickOutsideToClose(true)
                .title(title)
                .textContent(content || '操作成功！')
                .ariaLabel(title)
                .ok('知道了'));
            return alert;
        };
        /*
         * angular的safe执行
         * */
        BaseController.prototype.safeApply = function ($scope, applyFn) {
            if (!$scope.$$phase)
                $scope.$apply(applyFn);
            else
                applyFn();
        };
        /*
         * 弹出错误信息
         * */
        BaseController.prototype.showErrMsg = function (msg) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(msg || "error")
                .position('bottom right')
                .action('关闭')
                .highlightAction(true)
                .hideDelay(3000));
        };
        /*
         * 弹出提示信息
         * */
        BaseController.prototype.showMsg = function (msg) {
            this.$mdToast.show(this.$mdToast.simple()
                .textContent(msg || "success")
                .position('top right')
                .highlightAction(true)
                .hideDelay(3000));
        };
        /*
         * 打开菜单
         * */
        BaseController.prototype.openMenu = function ($mdOpenMenu, $event) {
            setTimeout(function () {
                $mdOpenMenu($event);
            });
        };
        BaseController.prototype.showPic = function (index, images, $event) {
            this.$rootScope.$emit('showImages', {
                images: images,
                index: index,
                $event: $event
            });
            this.stopAll($event);
        };
        return BaseController;
    }(angularCommon.AngularCommon));
    exports.BaseController = BaseController;
});
//# sourceMappingURL=base_controller.js.map