function GoalDetailController($state, $stateParams, GoalService){
	
	let vm = this;
	vm.id = $stateParams.id;
	vm.group = {}; 
	vm.deleteGoal = deleteGoal;
	vm.completeGoal = completeGoal;
	


	function init () {
		GoalService.getDetail(vm.id).then((resp)=>{
			vm.group = resp.data[0]; 
			console.log(vm.group); 
		}); 
	}; 
	
	init();

	function deleteGoal () {
		console.log("hit delete button!"); 
		GoalService.deleteGoal(vm.id).then((resp)=>{
			$state.go('root.goals');
		}); 
	}; 

	function completeGoal () {
		GoalService.completeGoal(vm.id).then((resp)=>{
			console.log('check completed status: ', resp); 
		}); 
	}; 
}

GoalDetailController.$inject=['$state', '$stateParams', 'GoalService'];
export { GoalDetailController };