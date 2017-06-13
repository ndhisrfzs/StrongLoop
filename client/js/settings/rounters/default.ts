export var init = ($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise(function($injector){
        var $state = $injector.get("$state");
        $state.go('home');
    });
}