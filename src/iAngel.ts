var angular;
module iAngel {
    export class Utils {
        public static getClassName(clazz,modules): string {

           for(var i=0;i<modules.length;i++){
               for(var name in modules[i]){
                    if(modules[i][name] == clazz){
                        return name;
                    }
                }
           }
            

            for (var name in window) {
                if (window[name] == clazz) {
                    return name;
                }
            }
            return (clazz.toString().replace(/function\s?/mi, "").split("("))[0];
        }

    }

    interface iClassName {
        /**
         * return name => |N|
         */
        getName(): string;
    }

    /**
     * U can use it create angularJS Object. like .controller('|N|name',['|P|$scope',|F|function($scope){...}])
     * The Class Name  => |N|
     */
    abstract class Nut<T> {
        /**
         * return angularJS's params. => |P|
         */
        abstract getParams(): Array<string>;
        /**
         * when the controller be create will use it. =>|F|
         * @param thas this is an angularJS object;
         * @param params => |P|
         */
        abstract onCreate(thas: any, ...params: Array<any>);

        /**
         * don't use it.....
         * @param arr
         * @param module
         */
        abstract _init(arr: Array<any>, module: T): void;

        private _module: T;
        /**
         * return module.
         */
        get module(): T {
            return this._module;
        }

        private _angel:Angel<T>;
        get angel():Angel<T>{
            return this._angel;
        }
        /**
         * @param module module = angular.module, if U don't have any TypeScript about angular.module U can use type any.
         */
        constructor(angel: Angel<T>) {
            var thas = this;
            this._module = angel.module;
            this._angel = angel;
            var arr: Array<any> = this.getParams();
            if (!arr) {
                arr = [];
            }
            arr[arr.length] = function (...params: Array<any>) {
                return thas.onCreate(this, ...params);
            }
            this._init(arr, angel.module);
        }
    }

    export abstract class Config<T> extends Nut<T> {
        abstract getParams(): Array<string>;
        abstract onCreate(thas: Config<T>, ...params: Array<any>): void;
        _init(arr, module) {
            module.config(arr);
        }
    }

    export abstract class Directive<T> extends Nut<T> implements iClassName {
        abstract getParams(): Array<string>;
        abstract onCreate(thas: any, ...params: Array<any>): Object;
        private _name: string;
        getName(): string {
            return this._name;
        }
        _init(arr, module) {
            this._name = Utils.getClassName((<any>this).constructor,this.angel.typeModules);
            module.directive(this.getName(), arr);
        }
    }

    export abstract class Controller<T> extends Nut<T> implements iClassName {
        abstract getParams(): Array<string>;
        abstract onCreate(thas: any, ...params: Array<any>): void;
        private _name: string;
        getName(): string {
            return this._name;
        }
        _init(arr, module) {
            this._name = Utils.getClassName((<any>this).constructor,this.angel.typeModules);
            module.controller(this.getName(), arr);
        }
    }

    export abstract class Service<T> extends Nut<T> implements iClassName {
        abstract getParams(): Array<string>;
        abstract onCreate(thas: any, ...params: Array<any>): void;
        private _name: string;
        getName(): string {
            return this._name;
        }
        _init(arr, module) {
            this._name = Utils.getClassName((<any>this).constructor,this.angel.typeModules);
            module.service(this.getName(), arr);
        }
    }

    export class Angel<T> {
        private _module:T
        get module():T{
            return this._module
        }
        private  _typeModules:Array<Object>
        get typeModules():Array<Object>{
            return this._typeModules
        }

        constructor(name:string,dep:Array<string>,typeModules:Array<Object>){
            this._module = angular.module(name,dep)
            this._typeModules = typeModules
        }
      
    }

}