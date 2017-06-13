import angular = require('angular')
import appModule = require('modules/app_module');
import services = require('services/services');
import controllers = require('controllers/controllers');
import directives = require('directives/directives');
import filters = require('filters/filters');

var init = ()=>{
    new services.Services(appModule.module);
    new controllers.Controllers(appModule.module);
    new directives.Directives(appModule.module);
    new filters.Filters(appModule.module);

    angular.bootstrap(document, [appModule.module.name])
};

init();