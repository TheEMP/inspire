(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoServ = new TodoService()
	new Vue({
		el: '#todo',
		data: {
			todos: [],
			completed: [],
			taskname: ""
		},
		mounted: function () {
			todoServ.getTodos((t, c) => { 
				this.todos = t
				this.completed = c || []
			})
		},
		methods: {
			setTodos: function (todos) {
				console.log(todos);
				this.todos = todos
			},
			completeTodo: function (id) {
				//console.log(this.todos[id].complete)
				this.todos[id].complete = !this.todos[id].complete
				let togo = this.todos.splice(id, 1)[0]
				this.completed.push(togo)
				//console.log(this.todos[id])
				todoServ.saveTodos(this.todos, this.completed)
			},
			uncompleteTodo: function (id) {
				//console.log(this.todos[id].complete)
				this.completed[id].complete = !this.completed[id].complete
				let togo = this.completed.splice(id, 1)[0]
				this.todos.push(togo)
				//console.log(this.todos[id])
				todoServ.saveTodos(this.todos, this.completed)
			},
			deleteTodo: function (id) {
				this.completed.splice(id, 1)
				todoServ.saveTodos(this.todos,this.completed)
			},
			addTodo: function () {
				this.todos.push({ title: this.taskname, complete: false, time: false })
				this.taskname = ""
				todoServ.saveTodos(this.todos,this.completed)
			}
		}
	})
	
	
}())
