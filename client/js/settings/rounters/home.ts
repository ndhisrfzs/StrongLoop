export var init = ($urlRouterProvider, $stateProvider) => {
    $stateProvider.state('home', {
        url: '/',
        data:{
            permissions : {
                only: ['user']
            }
        },
        views:{
            '': {
                templateUrl:'js/html/home/index.html'
            }
        }
    });
};