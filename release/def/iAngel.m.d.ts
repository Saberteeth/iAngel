declare module iAngel {
    class Utils {
        static getClassName(clazz: any): string;
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
        module:T;
        /**
         * @param module module = angular.module, if U don't have any TypeScript about angular.module U can use type any.
         */
        constructor(module: T);
    }

    export abstract class Config<T> extends Nut<T> {
        abstract getParams(): Array<string>;
        abstract onCreate(thas: Config<T>, ...params: Array<any>): void;
    }

    export abstract class Directive<T> extends Nut<T> implements iClassName {
        abstract getParams(): Array<string>;
        abstract onCreate(thas: any, ...params: Array<any>): Object;
        getName: string;
    }

    export abstract class Controller<T> extends Nut<T> implements iClassName {
        abstract getParams(): Array<string>;
        abstract onCreate(thas: any, ...params: Array<any>): Object;
        getName: string;
    }

    export abstract class Service<T> extends Nut<T> implements iClassName {
        abstract getParams(): Array<string>;
        abstract onCreate(thas: any, ...params: Array<any>): Object;
        getName: string;
    }
}