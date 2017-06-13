export module Common {
    export class ClientData<T> {
        public total:number;
        public datas:Array<T>;

        constructor(){
            this.datas = [];
        }
    }
}