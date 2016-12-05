function LoginController($rootScope, $state, UserService){
	let vm = this;

	vm.login = login;

	function login(user){
		console.log("LoginController activated with...", user);

		UserService.login(user).then(
			resp => {
				console.log("Logged-in user: ", resp.data); 
				
				UserService.setUser(resp.data);
				console.log("Set user w/ cookies: ", resp.data);
				$state.go('root.goals');
			}, 
			errors => {
				console.log(errors.data.error); 
			}
		);
	}; 	
}; 

LoginController.$inject=['$rootScope', '$state', 'UserService'];
export { LoginController };