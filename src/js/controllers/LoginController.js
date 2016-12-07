function LoginController($rootScope, $state, UserService){
	let vm = this;

	vm.login = login;

	function login(user){
		console.log("LoginController activated with...", user);

		UserService.login(user).then(
			resp => { 

				UserService.setUser(resp.data);

				$rootScope.$broadcast('loginChange', {});
				
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