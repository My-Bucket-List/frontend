import { UserService } from '../services/UserService'; 

function RegisterController($state, UserService){
	
	let vm = this;

	vm.registerUser = registerUser;

	function registerUser(user){
		console.log("RegisterController activated with...", user);

		UserService.register(user).then((resp)=>{
		console.log("Created user: ", resp.data);
		$state.go('root.home'); 
		})	
	};
}

RegisterController.$inject=['$state', 'UserService'];
export { RegisterController };