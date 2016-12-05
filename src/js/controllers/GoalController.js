function GoalController($http, $state, GoalService){
	
	let vm = this;

	vm.goals = []; 
	vm.add = add;

	function add(goal){
		console.log('Data submitted: ', goal);

		GoalService.addGoal(goal).then((resp)=>{
			console.log('New goal: ', goal); 
			$state.go('root.goals'); 
		}); 
	}; 
}

GoalController.$inject=['$http', '$state', 'GoalService'];
export { GoalController };