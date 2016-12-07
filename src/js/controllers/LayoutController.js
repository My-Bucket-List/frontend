function LayoutController($rootScope, UserService){
	let vm = this;

	vm.loggedIn = false; 
	vm.logout = logout; 

	$rootScope.$on('loginChange', (event, data) => {
      vm.loggedIn = UserService.isLoggedIn();
 	});

	function logout (user) {
		
		UserService.logout();

		$rootScope.$broadcast('loginChange', {});
	
	}; 
}; 

LayoutController.$inject=['$rootScope', 'UserService'];
export { LayoutController }; 