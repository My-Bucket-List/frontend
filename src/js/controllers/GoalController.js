function GoalController($cookies, $http, $state, GoalService, UserService, $stateParams){
	
	let vm = this;

	vm.goals = []; 
	vm.add = add;
	vm.showGoals = false;
	vm.userId = $cookies.get('id'); 

	function add (goal) {
			GoalService.addGoal(goal).then((resp)=>{
			console.log('New goal: ', resp.data); 	
			vm.goals.push(resp.data); 
			$state.go('root.goals'); 
		}); 
	}; 

	function init () {
			console.log('CTRL id: ', vm.userId); 
			GoalService.getUserGoals(vm.userId).then((resp)=>{
				console.log('response: ', resp.data); 
				vm.goals = resp.data; 
		}); 
	}; 

	init(); 
}

GoalController.$inject=['$cookies', '$http', '$state', 'GoalService', 'UserService', '$stateParams'];
export { GoalController };