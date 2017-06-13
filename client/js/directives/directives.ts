import common = require('common/directives/directives');
import root = require('directives/root_directive');

export class Directives extends common.Directives {
    constructor(module:ng.IModule){
        super(module);

        module
            .directive(root.Directive._name, root.Directive.directive);
    }
}