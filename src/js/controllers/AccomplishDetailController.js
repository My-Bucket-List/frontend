function AccomplishDetailController($state, $stateParams, GoalService, $rootScope){
	
	let vm = this;
	vm.id = $stateParams.id;
	vm.group = {}; 
	vm.deleteGoal = deleteGoal;
	vm.completeGoal = completeGoal;
	vm.isComplete = false; 
	
	$rootScope.$on('isCompleteChange', (event, data) => {
	    console.log("hit rootscope function!!!!! Success you beautiful coder!!!!"); 
 		
 		if (vm.isComplete === false){
 			vm.isComplete = true;
 		} else {
 			vm.isComplete = false; 
 		}

 	});

	function init () {
		GoalService.getDetail(vm.id).then((resp)=>{
			
			if (resp.data[0].completed === false) {
				vm.isComplete = false; 
			} else {
				vm.isComplete = true; 
			}

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

			$rootScope.$broadcast('isCompleteChange', {});

			$state.go('root.accomplish'); 
		}); 
	}; 
}

AccomplishDetailController.$inject=['$state', '$stateParams', 'GoalService', '$rootScope'];
export { AccomplishDetailController };