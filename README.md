# iAngel
Control the angularJS by typescript. Such as the typescript class DemoController will be compile into a angularJS's controller. 
## About catalog
- demo: A web app to teach u how can use iAngel.
- release: The iAngel's JS code.
- src: The iAngel's typescript code.

## Simple Example
- Use iAngel create a angularJS controller.
		
		class DemoController extends iAngel.Controller<any>{
			getParams():Array<string>{
				//if u don't have params u can return [] or null.
				return ['#scope']
			}
			onCreate(thas,$scope){
				//thas is controller, $scope correspond getParams().
			}
		}

		var model = angular.modeule('demo',[]);
		new DemoController(model);

iAngel has not only these. Such as Service, Directive and Config.
