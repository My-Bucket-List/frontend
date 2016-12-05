function LayoutController($rootScope, UserService){
	let vm = this;

	vm.logout = logout; 

	function logout (user) {
		console.log("Activate LayoutController logout()!")
		UserService.logout();
	}; 
}; 

LayoutController.$inject=['$rootScope', 'UserService'];
export { LayoutController }; 