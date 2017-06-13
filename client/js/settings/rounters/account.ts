export var init = ($urlRounterProvider, $stateProvider) => {
    $stateProvider
        .state('account', {
            url: '/login',
            data: {
                permissions: {
                    only: ['anonymous']
                }
            },
            views: {
                '': {
                    templateUrl: 'js/html/account/index.html'
                },
                'accountView@account': {
                    templateUrl: 'js/html/account/login.html',
                    controller: 'LoginController',
                    controllerAs: 'loginCtl'
                }
            }
        });
}