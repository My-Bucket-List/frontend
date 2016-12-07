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

	function init () {
			GoalService.getUserGoals(vm.userId).then((resp)=>{
				vm.goals = resp.data; 
		}); 
	}; 

	init(); 
}

GoalController.$inject=['$cookies', '$http', '$state', 'GoalService', 'UserService', '$stateParams'];
export { GoalController };