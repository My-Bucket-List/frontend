function AccomplishController($rootScope, GoalService, $cookies){
	
	let vm = this;
	vm.userId = $cookies.get('id'); 
	vm.goals = []; 

	function checkCompleteStatus (item) {
		return item.completed == true;
	}; 

	function init () {
		GoalService.getUserGoals(vm.userId).then((resp)=>{
			console.log('resp: ', resp); 
			
			let goalList = resp.data.filter(checkCompleteStatus); 

			vm.goals = goalList; 

		}); 
	}; 

	init(); 
}

AccomplishController.$inject=['$rootScope', 'GoalService', '$cookies'];
export { AccomplishController };