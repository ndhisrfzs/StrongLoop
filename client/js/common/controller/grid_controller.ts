import angular = require('angular');
import base = require('common/controller/base_controller');
import toolbarItem = require('common/models/common/toolbar_item');

export class GridController<TData> extends base.BaseController {
    //选中的数据
    public selected:Array<TData> = [];
    //服务器数据
    public clientData:Common.ClientData<TData>;
    //是否是搜索模式
    public searchMode:boolean;
    //搜索数据
    public queryData:Common.QueryBase;
    //schema
    public schema:any;
    //搜索表单
    public searchForm:Array<any>;
    //数据返回后进行适配方法
    public dataFilter:Function;
    //是否繁忙
    public isBusy:boolean;
    //获取数据的接口
    public serverInterface:Function;
    //用于多个接口同时返回
    public serverInterfaces:{[index:string]:ng.IPromise<any>} = {}
    //主toolbar上的按钮
    public rootToolbars:Array<toolbarItem.Common.ToolbarItem> = [];
    //选中后的按钮
    public selectToolbars:Array<toolbarItem.Common.ToolbarItem> = [];
    //table上的按钮
    public itemToolbars:Array<toolbarItem.Common.ToolbarItem> = [];

    public rowSelect:Array<number> = [10, 30, 50];

    public deferred:ng.IPromise<any>;
    public $sForm:ng.IFormController;

    public defQuery:any = {};
    public columns:Array<any> = [];

    constructor(args:IArguments, clearToolbar:boolean = true){
        super(args);
        clearToolbar && (this.$rootScope['toolbars'] == this.rootToolbars);
        this.$scope.$on('$destory', ()=> {
            this.abort();
        });
    }

    abort(){
        this.$http && angular.forEach(this.$http.pendingRequests, (request:ng.IRequestConfig) => {
           if(request['cancel'] && request.timeout) {
               request['cancel'].resolve({
                   status: 200,
                   reqult_code: -9876,
                   msg: ''
               });
           }
        });
    }

    confirm(opts:any, serverInterface:Function, filterData:Function, success?:Function) {
        var confirm = this.$mdDialog.confirm()
            .title(opts.title)
            .textContent(opts.content)
            .targetEvent(opts.$event)
            .ok(opts.ok || "确定")
            .cancel(opts.cancel || "取消");

        if (this.selected.length > 0 || opts.ignoreSelection) {
            this.$mdDialog.show(confirm).then(()=> {
                this.deferred = serverInterface(filterData(this.selected) || this.selected).success((data)=> {
                    opts.isRefresh && this.getServerData();
                    this.showMsg('执行成功!');
                    success && success.call(this, data);
                });
            });
        }
    }

    /*
     * 搜索
     * */
    doSearch(form:angular.IFormController) {
        if (form.$dirty) {
            form.$setPristine();
            this.getServerData();
            this.$sForm = form;
        }
    }

    /*
     * 显示/隐藏搜索栏
     * */
    toggleSearchBar() {
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
    }

    /*
     * 拉取服务器数据
     * */
    getServerData() {
        if (this.isBusy) return;
        //this.clearSelected();
        this.isBusy = true;
        this.abort();
        this.queryData.where = angular.extend({}, this.queryData.where, this.defQuery);
        this.deferred = this.serverInterface(this.queryData).success((data)=> {
            this.clientData = this.dataFilter(data);
        }).finally(()=> {
            //this.deferred.resolve();
            this.isBusy = false;
        });

        return this.deferred;
    }

    /*
     * 清除选中的数据
     * */
    clearSelected() {
        this.selected.length = 0;
    }

    /*
     * 分页改变时候调用
     * */
    onPageChange(page:number, pageCount:number) {
        this.queryData.page = page;
        this.queryData.pageCount = pageCount;

        this.queryData.limit = pageCount;
        this.queryData.offset = pageCount * (page - 1);

        return this.getServerData();
    }

    /*
     * 排序改变时候调用
     * */
    onOrderChange(order) {
        this.queryData.order = order;
        return this.getServerData();
    }

    initColumns() {
    }

    initToolbar() {
    }

    initSearch() {
    }
}