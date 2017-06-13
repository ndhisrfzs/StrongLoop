import login = require('controllers/account/login_controller');
import index = require('controllers/home/index_controller');

export class Controllers {
    constructor(module:ng.IModule) {
        module
            .controller(login.Controller._name, login.Controller)
            .controller(index.Controller._name, index.Controller);
    }
}