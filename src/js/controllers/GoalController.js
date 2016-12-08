function GoalController($cookies, $http, $state, GoalService, UserService, $stateParams){
	
	let vm = this;

	vm.goals = []; 
	vm.add = add;
	vm.userId = $cookies.get('id'); 

	function add (goal) {
			GoalService.addGoal(goal).then((resp)=>{
			vm.goals.push(resp.data); 
			$state.go('root.goals'); 
		}); 
	}; 

	function checkCompleteStatus (item) {
		return item.completed == false;
	}; 

	function init () {
		GoalService.getUserGoals(vm.userId).then((resp)=>{

			let goalList = resp.data.filter(checkCompleteStatus); 

			vm.goals = goalList; 
		}); 
	}; 

	init(); 
}

GoalController.$inject=['$cookies', '$http', '$state', 'GoalService', 'UserService', '$stateParams'];
export { GoalController };