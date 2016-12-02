import angular from "angular";
import { routerConfig } from "./routes"; 
import 'angular-ui-router'; 

import { UserService } from './services/UserService'; 

import { LayoutController } from 	 './controllers/LayoutController'; 
import { HomeController } from 		 './controllers/HomeController';
import { RegisterController } from 	 './controllers/RegisterController';
import { LoginController } from 	 './controllers/LoginController';
import { GoalsController } from 	 './controllers/GoalsController';
import { AccomplishController } from './controllers/AccomplishController';


angular
	.module('app', ['ui.router'])
	.config(routerConfig)
	.controller('LayoutController', LayoutController)
	.controller('HomeController', HomeController)
	.controller('RegisterController', RegisterController)
	.controller('LoginController', LoginController)
	.controller('GoalsController', GoalsController)
	.controller('AccomplishController', AccomplishController)
	.service('UserService', UserService); 