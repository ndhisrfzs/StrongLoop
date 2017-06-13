import base = require('common/models/common/base_data');

export module Common {
    export class ToolbarItem extends base.Common.BaseData {
        public title:string;
        public icon:string;
        public onClick:Function;
        public children:Array<Common.ToolbarItem> = [];
        public href:string;
        public hash:string;
        public state:string;
        public params:any;
        
        public opened:boolean;
        public expanded:boolean;

        constructor(data?:any) {
            super(data);
        }
    }
}