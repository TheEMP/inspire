function TodoService(){
	//This service is all setup for you no edits necessary here
	this.getTodos =  function(cb){
		var t = localStorage.getItem('todo');
		var c = localStorage.getItem('ctodos');
		if(t){
			//console.log('Todo Data:', JSON.parse(t))
			
			cb(JSON.parse(t),JSON.parse(c))
			return 
		}
		console.log('Todo Data:', [])
		cb([])
		return [];
	}
	
	this.saveTodos =  function(todos, ctodos){
				//^^^ Less typical but todos should always be the entire array
		localStorage.setItem('todo', JSON.stringify(todos));
		localStorage.setItem('ctodos', JSON.stringify(ctodos));
		console.log('Todo Data Saved:', todos);
	}
}
