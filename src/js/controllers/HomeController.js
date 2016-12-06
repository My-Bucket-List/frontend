const SERVER = 'https://sleepy-island-23804.herokuapp.com/';

function HomeController(GoalService){
	
	let vm = this;

	vm.groups = []; 

	function init () {
		
		GoalService.getGoals().then((resp)=>{
			console.log(resp.data); 

			vm.groups = resp.data;

		})
	}; 

	init();
}

HomeController.$inject=['GoalService'];
export { HomeController }; 