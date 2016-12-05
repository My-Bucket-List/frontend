function GoalController($http, $state, GoalService){
	
	let vm = this;

	vm.goals = []; 
	vm.add = add;
	vm.showGoals = false;

	function add (goal) {
		console.log('Data submitted: ', goal);

		GoalService.addGoal(goal).then((resp)=>{
			console.log('New goal: ', resp.data); 
			// vm.goals.push(resp)
			$state.go('root.goals'); 
		}); 
	}; 

	function init () {
		GoalService.getGoals().then((resp)=>{
			vm.goals = resp.data; 
			console.log('Goals array: ', vm.goals);

			console.log('Goal: ', vm.goals[0].title);

			console.log('Picture: ', vm.goals[0].url);
		}); 
	}; 

	init(); 
}

GoalController.$inject=['$http', '$state', 'GoalService'];
export { GoalController };