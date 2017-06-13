export var init = ($q:ng.IQService, $cookieStore, Permission, PassportService) => {
    Permission.defineRole('anonymous', ($stateParams)=>{
        if(!$cookieStore.get('access_token')){
            return true;
        }
        return false;
    });
}