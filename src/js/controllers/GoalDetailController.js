function GoalDetailController($state, $stateParams, GoalService){
	
	let vm = this;
	vm.id = $stateParams.id;
	vm.group = {}; 


	function init () {
		
		GoalService.getDetail(vm.id).then((resp)=>{
			
			// console.log('Goal detail: ', resp.data[0]);

			vm.group = resp.data[0]; 

			console.log(vm.group); 

		}); 
	}; 

	init(); 
}

GoalDetailController.$inject=['$state', '$stateParams', 'GoalService'];
export { GoalDetailController };