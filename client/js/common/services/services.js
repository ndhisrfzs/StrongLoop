define(["require", "exports", "common/services/passport_service", "common/services/httpinterceptor_factory"], function (require, exports, passport, http) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Services = (function () {
        function Services(module) {
            module
                .service(passport.PassportService._name, passport.PassportService.factory)
                .factory(http.HttpInterceptorFactory._name, http.HttpInterceptorFactory.factory);
        }
        return Services;
    }());
    exports.Services = Services;
});
//# sourceMappingURL=services.js.map