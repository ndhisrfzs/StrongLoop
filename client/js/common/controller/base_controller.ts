import angularCommon = require('common/controller/angular_common');

export class BaseController extends angularCommon.AngularCommon {
    public $state:angular.ui.IStateService;
    public $stateParams:angular.ui.IStateParamsService;
    public $mdDialog:angular.material.IDialogService;
    public $mdToast:angular.material.IToastService;
    
    public title:string;
    public icon:any;

    constructor(args:IArguments) {
        super(args);
    }

    /*
     * 阻止默认事件
     * */
    preventDefault($event:MouseEvent){
        $event && ($event.defaultPrevented == true) && $event.preventDefault();
        return true;
    }

    /*
    * 阻止冒泡
    * */
    stopPropagation($event:MouseEvent){
        $event && ($event.cancelBubble == true)

        return true;
    }

    close(){
        this.$mdDialog && this.$mdDialog.cancel();
    }

     /*
     * 阻止默认事件  +  阻止冒泡
     * */
    stopAll($event:MouseEvent) {
        this.preventDefault($event) && this.stopPropagation($event);
    }

    /*
     * 弹出信息
     * */
    alert(title:string, content?:string) {
        var alert = this.$mdDialog.show(
            this.$mdDialog.alert()
                .clickOutsideToClose(true)
                .title(title)
                .textContent(content || '操作成功！')
                .ariaLabel(title)
                .ok('知道了')
        );


        return alert;
    }

    /*
     * angular的safe执行
     * */
    safeApply($scope:angular.IScope, applyFn:any) {
        if (!$scope.$$phase) $scope.$apply(applyFn)
        else applyFn();
    }

    /*
     * 弹出错误信息
     * */
    showErrMsg(msg) {
        this.$mdToast.show(this.$mdToast.simple()
            .textContent(msg || "error")
            .position('bottom right')
            .action('关闭')
            .highlightAction(true)
            .hideDelay(3000));
    }

    /*
     * 弹出提示信息
     * */
    showMsg(msg) {
        this.$mdToast.show(this.$mdToast.simple()
            .textContent(msg || "success")
            .position('top right')
            //.action('关闭')
            .highlightAction(true)
            .hideDelay(3000));
    }

    /*
     * 打开菜单
     * */
    openMenu($mdOpenMenu:any, $event:MouseEvent) {
       setTimeout(function(){
           $mdOpenMenu($event);
       });
    }

    showPic(index:number, images:Array<any>, $event:MouseEvent) {
        this.$rootScope.$emit('showImages', {
            images: images,
            index: index,
            $event: $event
        });
        this.stopAll($event);
    }

}