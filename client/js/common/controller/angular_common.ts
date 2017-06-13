import angular = require('angular');

export class AngularCommon {
    public static conName:string;

    public $rootScope:ng.IRootScopeService;
    public $scope:ng.IScope;
    public $q:ng.IQService;
    public $http:ng.IHttpService;

    constructor(args:IArguments) {
        this.initInvoke(this.constructor.$inject, args);
    }

    initInvoke($inject:ReadonlyArray<string>, args:IArguments) {
        var _this = this;

        angular.forEach($inject, function (value, key) {
            _this[value] = args[key];
        });
    }
}