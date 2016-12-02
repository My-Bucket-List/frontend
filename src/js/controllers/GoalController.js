const SERVER = 'https://sleepy-island-23804.herokuapp.com/'; 

function GoalController($http){
	
	let vm = this;

	// this.addGoal = addGoal;

	// function addGoal(banana){
	// 	console.log(banana);
	// 	$http.post(SERVER).then((resp)=>{
	// 		console.log(resp);
	// 	})
	// }
}

GoalController.$inject=['$http'];
export { GoalController };