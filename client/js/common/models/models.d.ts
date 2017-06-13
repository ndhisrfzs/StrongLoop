declare module Common {
    interface BaseData {
        updateAt:string;
        createAt:string;
        copyData(data:any);
    }

    interface ToolbarItem extends Common.BaseData {
        title:string;
        icon:string;
        onClick:Function;
        children:Array<Common.ToolbarItem>;
        href:string;
        hash:string;
        state:string;
        params:any;
        opened:boolean;
        expanded:boolean;
    }
    
    interface ClientData<T> {
        total:number;
        datas:Array<T>;
    }

    interface QueryBase {
        page:number;
        pageCount:number;
        order:string;
        where:any;
        filter:any;
        include:Array<string>;
        limit:number;
        offset:number;
    }
}

declare module Passport {
    interface LoginModel extends Common.BaseData {
        username: string;
        password: string;
        expireIn: boolean;
    }

    interface UserModel extends Common.BaseData {
        username:string;
        nickname:string;
        avatarUrl:string;
        mobile:string;
        email:string;
        userToken:string;
    }
}