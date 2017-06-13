export var init = ($q:ng.IQService, $cookieStore, Permission, PassportService) =>{
    Permission.defineRole('user', function(){
        var deferred = $q.defer();
        PassportService.getUser().success(function(data){
            console.log('success');
            deferred.resolve();
        }).error(function(){
            deferred.reject();
        });
        return deferred.promise;
    });
}