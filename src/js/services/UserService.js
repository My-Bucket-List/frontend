import { SERVER } from '../server'; 

function UserService($http){

	this.register = register;
	this.login = login;

	function register(user){
		console.log("UserService activated!");
		
		let url = SERVER + '/register'; 
		return $http.post(url, user); 
		}; 

	function login (user) {

		console.log("UserService login activated!");
    	return $http.post(`${SERVER}/login`, user);
  		};
	}

UserService.$inject=['$http']; 
export { UserService }; 