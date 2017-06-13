import angular = require('angular');
import base = require('common/controller/base_controller');
import grid = require('common/controller/grid_controller');

export class PopupController<T, T1> extends base.BaseController {
    public isBusy:boolean = false;
    public schema:any;
    public form:Array<any>;
    public formData:T;
    public managerGrid:grid.GridController<any>;
    public resolve:{[index: string]: ng.IPromise<any>};
    public dialogCloseFn:Function;
    public content:string;
    public currentItem:T1;
    public $promise:ng.IPromise<any>;

    constructor(args:IArguments){
        super(args);
    }

    getDetailInfo(interfaces:{[index:string]:Function}, needData:boolean = false) {
        var promises:{[index:string]: ng.IPromise<any>} = {};

        if(this.isBusy) return;

        this.isBusy = true;

        angular.forEach(interfaces, function(fn:Function, key:string){
            if(needData) {
                promises[key] = fn(this.currentItem || {});
            } else {
                promises[key] = fn();
            }
        }).bind(this);

        return this.$q.all(promises)
            .finally(()=> {
                this.isBusy = false;
            });
    }

    submit($form:ng.IFormController, serverData?:T) {
        var promises:{[index:string]:ng.IPromise<any>} = {};
    
        this.$rootScope.$broadcast('schemaFormValidate');
        if($form.$dirty && $form.$valid && !this.isBusy) {
            angular.forEach(this.resolve, (fn:Function, key:string) => {
                promises[key] = fn(serverData || this.formData);
            });

            this.$promise = this.$q.all(promises);

            if(this.resolve && this.$promise)
            {
                this.managerGrid && (this.managerGrid.isBusy = true);
                this.isBusy = true;

                this.$promise.then((datas) => {
                    $form.$setPristine();
                    if(this.dialogCloseFn) {
                        this.dialogCloseFn(datas);
                    } else {
                        this.alert(this.schema.description, this.content).finally(() => {
                            this.managerGrid && this.managerGrid.getServerData && this.managerGrid.getServerData();
                        });
                    }
                }).finally(()=>{
                    this.managerGrid && (this.managerGrid.isBusy = false);
                    this.isBusy = false;
                    this.$promise = null;
                });
            }
        }
        if (!$form.$valid) {
            this.showErrMsg("表单填写不正确,请查看红色的表单项!");
        }
    }
}