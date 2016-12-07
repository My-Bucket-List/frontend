const SERVER = 'https://sleepy-island-23804.herokuapp.com/';

function HomeController(GoalService){
	
	let vm = this;

	vm.groups = []; 

	function hasContent (item) {
		return item.url !== null && item.user_id !== null; 
	}; 

	function init () {
		
		GoalService.getGoals().then((resp)=>{
			
			console.log(resp.data); 

			vm.groups = resp.data.filter(hasContent);

		})
	}; 

	init();
}

HomeController.$inject=['GoalService'];
export { HomeController }; 