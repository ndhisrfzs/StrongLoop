import base = require('common/models/common/base_data');

export module Passport {
    export class LoginModel extends base.Common.BaseData {
        public username: string;
        public password: string;
        public expireIn: boolean;

        public static _schema:any={
            type: "object",
            require:['username', 'password'],
            properties: {
                username: {
                    type: 'string',
                    minLength: 6,
                    maxLength: 30,
                    title: '用户名',
                    description: ''
                },
                password:{
                    type: 'string',
                    title: '密码',
                    minLength: '6',
                    maxLength: '30',
                    description: ''
                },
                expireIn: {
                    type: 'boolean',
                    title: '记住我'
                }
            }
        };

        constructor(data?: any) {
            super(data);
        }
    }
}