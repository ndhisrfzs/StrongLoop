var config : RequireConfig = {
    baseUrl: 'js',
    shim:{
        'angular': {
            deps:['jquery'],
            exports: 'angular'
        },
        'angular-ui-router':{
            deps:['angular']
        },
        'angular-animate': {
            deps:['angular']
        },
        'angular-aria': {
            deps:['angular']
        },
        'angular-permission': {
            deps:['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-material': {
            deps:['angular-aria', 'angular-animate']
        },
        'angular-sanitize': {
            deps:['angular-aria', 'angular-animate']
        },
        'schemaForm': {
            deps:['angular', 'objectpath', 'tv4', 'angular-sanitize']
        },
        'angular-schema-form-material': {
            deps: ['schemaForm']
        },
        'angular-meterial-icons': {
            deps: ['angular', 'angular-material']
        }
    },
    paths:{
        'jquery': '../node_modules/jquery/dist/jquery',
        'angular': '../node_modules/angular/angular',
        'angular-ui-router': '../node_modules/angular-ui-router/release/angular-ui-router',
        'angular-permission': '../node_modules/angular-permission/dist/angular-permission',
        'angular-cookies': '../node_modules/angular-cookies/angular-cookies',
        'angular-animate': '../node_modules/angular-animate/angular-animate',
        'angular-aria': '../node_modules/angular-aria/angular-aria',
        'angular-material': '../node_modules/angular-material/angular-material',
        'objectpath': '../node_modules/objectpath/lib/objectpath',
        'tv4': '../node_modules/tv4/tv4',
        'angular-sanitize': '../node_modules/angular-sanitize/angular-sanitize',
        'schemaForm': '../node_modules/angular-schema-form/dist/schema-form',
        'angular-schema-form-material': 'libs/material-decorator',
        'angular-meterial-icons': '../node_modules/angular-material-icons/angular-material-icons'
    },
    deps: [
        'angular-ui-router',
        'angular-permission',
        'angular-material',
        'angular-cookies',
        'angular-schema-form-material',
        'angular-meterial-icons'
    ],
    config: {
        'modules/app_module': [
            'ui.router',
            'permission',
            'ngCookies',
            'ngAnimate',
            'ngMaterial',
            'schemaForm',
            'ngMdIcons'
        ]
    },
    callback:function(){
        requirejs(["bootstrap/bootstrap"]);
    },
    urlArgs:"@@version"
};

requirejs.config(config);