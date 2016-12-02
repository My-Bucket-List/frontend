import { SERVER } from '../server'; 

function UserService($http){

	this.registerUser = function(user){
		let url = SERVER + '/register'; 
		return $http.post(url, user);
		}; 
	}

UserService.$inject=['$http']; 
export { UserService }; 