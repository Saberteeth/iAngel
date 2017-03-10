
module test{
    export class DemoController extends iAngel.Controller<any>{
        getParams(): Array<string> {
            return null;
        }
        onCreate(thas){
            thas.test = 'Hello iAngel'
        }
    }
}

class Demo2Controller extends iAngel.Controller<any>{
        getParams(): Array<string> {
            return null;
        }
        onCreate(thas){
            thas.test = 'Hello iAngel2'
        }
}

var angel = new iAngel.Angel('demo',['ngRoute',test]);
new test.DemoController(angel);
new Demo2Controller(angel);

