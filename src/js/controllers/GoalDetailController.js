function GoalDetailController($state, $stateParams, GoalService){
	
	let vm = this;
	vm.id = $stateParams.id;
	vm.group = {}; 
	vm.deleteGoal = deleteGoal;


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
}

GoalDetailController.$inject=['$state', '$stateParams', 'GoalService'];
export { GoalDetailController };