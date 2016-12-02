import { SERVER } from '../server'; 

function UserService($http){

	this.register = register;

	function register(user){
		console.log("UserService activated!");
		
		let url = SERVER + '/register'; 
		return $http.post(url, user); 
		}; 

	function login(user){
		let url = SERVER + '/login';
		return $http.post(url, user);
		};
	}

UserService.$inject=['$http']; 
export { UserService }; 