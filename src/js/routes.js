function routerConfig($stateProvider, $urlRouterProvider){
$stateProvider
	.state('root', {
		abstract: true,
		templateUrl: 'templates/layout.tpl.html', 
		controller: 'LayoutController as layout'
	})
	.state('root.home', {
		url: '/home',
		templateUrl: 'templates/home.tpl.html',
		controller: 'HomeController as home'
	})
	.state('root.register', {
		url: '/register',
		templateUrl: 'templates/register.tpl.html',
		controller: 'RegisterController as register'
	})
	.state('root.login', {
		url: '/login',
		templateUrl: 'templates/login.tpl.html',
		controller: 'LoginController as login'
	})
	.state('root.goals', {
		url: '/user/:user_id',
		templateUrl: 'templates/goals.tpl.html',
		controller: 'GoalController as goals'
	})
	.state('root.goalDetail', {
		url: '/goalDetail/:id',
		templateUrl: 'templates/goalDetail.tpl.html',
		controller: 'GoalDetailController as goalDetail'
	})
	.state('root.accomplish', {
		url: '/accomplishments',
		templateUrl: 'templates/accomplish.tpl.html',
		controller: 'AccomplishController as accomplish'
	})
	.state('root.accomplishDetail', {
		url: '/accomplishDetail/:id', 
		templateUrl: 'templates/accomplishDetail.tpl.html', 
		controller: 'AccomplishDetailController as accomplishDetail'
	})

	$urlRouterProvider.otherwise('/home');
}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };