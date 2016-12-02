function LoginController($rootScope, $state, UserService){
	let vm = this;

	vm.login = login;

	function login(user){
		console.log("LoginController activated with...", user);

		UserService.login(user).then((resp)=>{
			console.log("Logged-in user: ", resp); 
		})	
	}
}

LoginController.$inject=['$rootScope', '$state', 'UserService'];
export { LoginController };