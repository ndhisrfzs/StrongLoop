import config = require('module');
import angular = require('angular');
import setting = require('settings/settings');

class AppModule {
    public module:ng.IModule;
    public deps:Array<string> = config.config();
    constructor(name:string){
        this.module = angular.module(name, this.deps);
        this.config();
        this.run();
    }

    config(){
        var _this = this;

        _this.module.config([
            '$stateProvider',
            '$urlRouterProvider',
            '$httpProvider',
            function($stateProvider, $urlRouterProvider, $httpProvider){
                setting.settings.initRounter($urlRouterProvider, $stateProvider);
                
                setting.settings.initHttpInfo($httpProvider);
            }
        ]);
    }

    run(){
        var _this = this;

        _this.module.run([
            '$rootScope',
            '$state',
            '$stateParams',
            '$q',
            '$cookieStore',
            'Permission',
            'PassportService',
            function($rootScope, $state, $stateParams, $q, $cookieStore, Permission, PassportService) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                setting.settings.initRoles($q, $cookieStore, Permission, PassportService);
            }
        ]);
    }
}

export var module = new AppModule('app_module').module;