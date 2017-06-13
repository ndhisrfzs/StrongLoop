import base = require('common/controller/popup_controller');
import loginModel = require("common/models/passport/login_model");

export class Controller extends base.PopupController<Passport.LoginModel, any> {
    public static $inject = ['$rootScope', '$scope', 'PassportService', '$q', '$mdToast', '$cookieStore', '$mdDialog', '$state'];
    public static _name = 'LoginController';

    private PassportService: any;
    private $cookieStore: any;

    constructor(){
        super(arguments);
        this.$rootScope['mainClas'] = 'layout-column';

        this.initSchema();

        this.resolve = {
            "loginCheck": this.PassportService.loginCheck
        }

        this.dialogCloseFn = (datas) => {
            this.showMsg('登陆成功');
            this.$state.go('home');
        }
    }

    initSchema(){
        this.schema = loginModel.Passport.LoginModel._schema;
        this.form = [
            {
                key: 'username', 
                type: 'string',
                icon:{
                    icon:'person',
                },
                htmlClass: 'md-icon-float md-has-icon',
                disableSuccessState: true
            },{
                key: 'password',
                type: 'password',
                icon: {
                    icon: 'lock_outline'
                },
                htmlClass: 'md-icon-float md-has-icon',
                disableSuccessState: true
            }, {
                key: 'expireIn',
            }, {
                type: 'submit',
                title: '登录',
                readonly: false,
                fieldHtmlClass: 'layout-fill',
                icon: ''
            }];
        this.formData = new loginModel.Passport.LoginModel();
    }
}