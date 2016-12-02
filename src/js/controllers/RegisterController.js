import { UserService } from '../services/UserService'; 

function RegisterController($state, UserService){
	
	let vm = this;

	this.registerUser = registerUser;

	function registerUser(user){
		console.log(user);

		UserService.registerUser(user).then((resp)=>{
			console.log(resp); 
		})	
	}
}

RegisterController.$inject=['$state', 'UserService'];
export { RegisterController };