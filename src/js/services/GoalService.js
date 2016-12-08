import { SERVER } from '../server'; 

function GoalService($http, UserService){ 

	this.addGoal = addGoal;
	this.getGoals = getGoals;
	this.getUserGoals = getUserGoals;
	this.getDetail = getDetail;
	this.deleteGoal = deleteGoal; 
	this.completeGoal = completeGoal; 

	function addGoal (goal) {
		console.log("GoalService addGoal activated!"); 
		let req = {
			url: `${SERVER}/goals`, 
			data: goal,
			method: 'POST',
			headers: UserService.getHeaders()
		}; 
		return $http(req); 
	}; 

	function getGoals () {
		return $http.get(`${SERVER}/goals`);
	}; 

	function getUserGoals (id) {
		console.log('SRVC id: ', id); 
		let req = {
			url: `${SERVER}/user/${ id }`,
			method: 'GET',
			headers: UserService.getHeaders()
		}; 
		return $http(req)
	}; 
 
	function getDetail (id) {
		console.log('SRVC arg: ', id);
		let req = {
			url: `${SERVER}/goals/${ id }`,
			method: 'GET', 
			headers: UserService.getHeaders()
		}; 	
		return $http(req);  
	}; 

	function deleteGoal (id) {
		let req = {
			url: `${SERVER}/goals/${ id }`,
			method: 'DELETE',
			headers: UserService.getHeaders()
		}; 
		return $http(req)
	}; 

	function completeGoal (id) {
		let req = {
			url: `${SERVER}/completed/${ id }`,
			method: 'PATCH',
			headers: UserService.getHeaders()
		}; 
		return $http(req)
	}; 
}

GoalService.$inject=['$http', 'UserService']; 
export { GoalService };