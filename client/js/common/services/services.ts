import passport = require('common/services/passport_service');
import http = require('common/services/httpinterceptor_factory');

export class Services {
    constructor(module:ng.IModule) {
        module
            .service(passport.PassportService._name, passport.PassportService.factory)
            .factory(http.HttpInterceptorFactory._name, http.HttpInterceptorFactory.factory);
    }
}