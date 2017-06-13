define(["require", "exports", "angular", "modules/app_module", "services/services", "controllers/controllers", "directives/directives", "filters/filters"], function (require, exports, angular, appModule, services, controllers, directives, filters) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var init = function () {
        new services.Services(appModule.module);
        new controllers.Controllers(appModule.module);
        new directives.Directives(appModule.module);
        new filters.Filters(appModule.module);
        angular.bootstrap(document, [appModule.module.name]);
    };
    init();
});
//# sourceMappingURL=bootstrap.js.map