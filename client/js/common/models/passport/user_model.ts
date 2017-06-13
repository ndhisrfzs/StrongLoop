import base = require('common/models/common/base_data');

export module Passport {
    export class UserModel extends base.Common.BaseData {
        public username:string;
        public nickname:string;
        public avatarUrl:string;
        public mobile:string;
        public email:string;
        public userToken:string;

        public static _schema:any = {
            type: 'object',
            description: '用户',
            require: ['nickname'],
            properties: {
                username: {
                    type: 'string',
                    title: '用户登录名'
                },
                nickname: {
                    type: 'string',
                    title: '昵称'
                },
                avatarUrl: {
                    type: 'string',
                    title: '头像'
                },
                mobile: {
                    type: 'string',
                    title: '手机'
                },
                email: {
                    type: 'string',
                    tilte: '邮箱'
                },
                userToken: {
                    type: 'string',
                    tilte: '用户标识'
                }
            }
        };

        constructor(data?:any) {
            super(data);
        }
    }
}