import base = require('common/models/common/base_data');

export module Common {
    export class QueryBase extends base.Common.BaseData {
        public page:number = 1;
        public pageCount:number = 10;
        public order:string;
        public where:any = {};
        public include:Array<string> = [];

        public offset:number = 0;
        public limit:number = 10;

        public filter:any = {};

        constructor(data?:any){
            super(data);
        }
    }
}