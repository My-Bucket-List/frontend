import angular from "angular";
import { routerConfig } from "./routes"; 
import 'angular-ui-router'; 
import 'angular-cookies'; 

import { UserService } from './services/UserService'; 
import { GoalService } from './services/GoalService'; 


import { LayoutController } from 	 './controllers/LayoutController'; 
import { HomeController } from 		 './controllers/HomeController';
import { RegisterController } from 	 './controllers/RegisterController';
import { LoginController } from 	 './controllers/LoginController';
import { GoalController } from 	     './controllers/GoalController';
import { GoalDetailController } from './controllers/GoalDetailController'; 
import { AccomplishController } from './controllers/AccomplishController';


angular
	.module('app', ['ui.router', 'ngCookies'])
	.config(routerConfig)
	.controller('LayoutController', LayoutController)
	.controller('HomeController', HomeController)
	.controller('RegisterController', RegisterController)
	.controller('LoginController', LoginController)
	.controller('GoalController', GoalController)
	.controller('GoalDetailController', GoalDetailController)
	.controller('AccomplishController', AccomplishController)
	.service('UserService', UserService)
	.service('GoalService', GoalService); 