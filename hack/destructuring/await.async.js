const fetch = require('node-fetch');

let userTodo = async ut => {
	const [user, todo] = await Promise.all([
		fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
		fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
	]);

	return {
		user,
		todo
	}
}

userTodo()
	.then(body => console.log(body.user, body.todo));

