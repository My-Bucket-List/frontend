import { SERVER } from '../server'; 

function GoalService($http, UserService){ 

	this.addGoal = addGoal;

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
}

GoalService.$inject=['$http', 'UserService']; 
export { GoalService };