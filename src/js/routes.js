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
		url: '/goals',
		templateUrl: 'templates/goals.tpl.html',
		controller: 'GoalController as goals'
	})
	.state('root.goal_detail', {
		url: '/goalDetail',
		templateUrl: 'templates/goalDetail.tpl.html',
		controller: 'GoalDetailController as goalDetail'
	})
	.state('root.accomplish', {
		url: '/accomplishments',
		templateUrl: 'templates/accomplish.tpl.html',
		controller: 'AccomplishController as accomplish'
	})

	$urlRouterProvider.otherwise('/home');
}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };