import { SERVER } from '../server'; 

function UserService($http, $cookies){

	this.register = register;
	this.login = login;
	this.setUser = setUser;
	this.isLoggedIn = isLoggedIn; 
	this.logout = logout;
	this.getHeaders = getHeaders;
	this.getId = getId; 

	function register (user){
		console.log("UserService activated!");
		
		let url = SERVER + '/register'; 
		return $http.post(url, user); 
		}; 

	function login (user) {

		console.log("UserService login activated!");
    	return $http.post(`${SERVER}/login`, user);
  		};

	function setUser (data) {
	    $cookies.put('username', data.username);
	    $cookies.put('access_token', data.access_token);
	    $cookies.put('id', data.id); 
	  };

	function getId () {
		let id = $cookies.get('id'); 
		return {userId: id};
	}; 

	function isLoggedIn () {
		return $cookies.get('username') ? true : false; 
	}; 

	function logout () {
		console.log("Activate UserService logout()!")
		$cookies.remove('username');
    	$cookies.remove('access_token');
	}; 

	function getHeaders () {
	    let token = $cookies.get('access_token');
	    return {
	      Authorization: `Bearer ${token}`
	    };
    }; 
}

UserService.$inject=['$http', '$cookies']; 
export { UserService }; 