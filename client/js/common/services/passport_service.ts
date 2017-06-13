export class PassportService {
    public static _name:string = 'PassportService';

    public static factory:Array<any> = ['$rootScope', '$q', '$http', ($rootScope, $q, $http):any => {
        return {
            loginCheck :function(loginMdl:Passport.LoginModel) {
                var promise = $http({
                    method: 'POST',
                    url:'api/People/login',
                    data: {
                        username:loginMdl.username,
                        password:loginMdl.password,
                        expire_in:loginMdl.expireIn ? 60000 : 0,
                    }
                }).success(function(data){
                    console.log(arguments);
                });

                return promise;
            },
            getUser: function(){
                var promise = $http({
                    method: 'POST',
                    url:'api/People/get_user',
                    needToken: true
                }).success(function(data){
                    if(data.result_code == 1) {
                        $rootScope.$emit('userInfo', data);
                    }
                });

                return promise;
            }
        }
    }];
}