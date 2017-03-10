# iAngel
**Version:1.1.1**

Control the angularJS by typescript. Such as the typescript class DemoController will be compile into a angularJS's controller. 
## About catalog
- demo: A web app to teach u how can use iAngel.
- release: The iAngel's JS code.
- src: The iAngel's typescript code.

## Simple Example
- Use iAngel create a angularJS controller.
		
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

		var angel = new iAngel.Angel('demo',[],[test]);
		new test.DemoController(angel);
		new Demo2Controller(angel);

iAngel has not only these. Such as Service, Directive and Config.
