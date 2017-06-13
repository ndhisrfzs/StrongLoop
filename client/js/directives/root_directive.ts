import base = require('common/controller/base_controller');
import userModel = require('common/models/passport/user_model');

export class Directive extends base.BaseController {
    public static _name:string = 'root';

    public static directive:Array<any> = ['$rootScope', '$timeout', '$state', '$cookieStore', '$mdSidenav', '$mdToast', '$mdUtil', '$mdDialog',
    function($rootScope, $timeout, $state, $cookieStore, $mdSidenav, $mdToast, $moUttil, $mdDialog) {
        var directive:ng.IDirective = {}, con;

        base.BaseController.$inject = ['$rootScope', '$timeout', '$state', '$cookieStore', '$mdSidenva', '$mdToast', '$mdUtil'];
        con = new base.BaseController(arguments);

        directive.link = ($scope) => {
            $rootScope.$on('userIntercepted', (state, ename, data) => {
                $cookieStore.remove('access_token');
                $cookieStore.remove('refresh_token');
                $mdDialog.cancel(null);
                $state.go('account');
            });
            $rootScope.user = new userModel.Passport.UserModel({
                nickname: '未设置',
                avatarUrl: ''
            });
            $rootScope.$on('userInfo', (event, data) => {
                $rootScope.user.nickname = data.nickname;
                $rootScope.user.avatarUrl = data.avatarUrl;
                $rootScope.user.email = data.email;
                $rootScope.user.mobile = data.mobile;
                $rootScope.user.userToken = data.userToken;
            });
            $rootScope.$on('showError', function(state, ename, data){
                con.showError(data);
            });
            $rootScope.isEmptyObject = function(obj) {
                for(var name in obj) {
                    return false;
                }

                return true;
            };
        };

        return directive;
    }];
}