import { SERVER } from '../server'; 

function GoalService($http){

	this.addGoal = function(goal){
		let url = SERVER + '/user/:user_id/list'; 
		return $http.post(url, goal);
		}; 
	}

GoalService.$inject=['$http']; 
export { GoalService };