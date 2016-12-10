function LayoutController($rootScope, UserService, $cookies){
	let vm = this;

	vm.loggedIn = false; 
	vm.logout = logout; 
	vm.userId = $cookies.get('id');
	vm.user = {};  

	$rootScope.$on('loginChange', (event, data) => {
      vm.loggedIn = UserService.isLoggedIn();
 	});

	function init () {
		console.log('userId', vm.userId); 
		if (vm.userId !== null) {
			vm.loggedIn = true;
		}
	}; 

	init (); 

	function logout (user) {
		UserService.logout(); 
		$rootScope.$broadcast('loginChange', {});
	}; 
}; 

LayoutController.$inject=['$rootScope', 'UserService', '$cookies'];
export { LayoutController }; 