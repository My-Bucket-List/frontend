import { SERVER } from '../server'; 

function GoalService($http, UserService){ 

	this.addGoal = addGoal;
	this.getGoals = getGoals;
	this.getDetail = getDetail;

	function addGoal (goal) {
		
		console.log("GoalService addGoal activated!"); 

		let req = {
			url: `${SERVER}/goals`, 
			data: goal,
			method: 'POST',
			headers: UserService.getHeaders()
		}; 
		console.log('req: ', req);
		return $http(req); 
	}; 

	function getGoals () {
		return $http.get(`${SERVER}/goals`);
	}; 
 
	function getDetail (id) {
		
		console.log('SRVC arg: ', id);

		let req = {
			url: `${SERVER}/goals/${ id }`,
			method: 'GET', 
			headers: UserService.getHeaders()
		}; 

		// console.log('SRVC goal detail: ', req);
		
		return $http(req);  
	}; 
}

GoalService.$inject=['$http', 'UserService']; 
export { GoalService };