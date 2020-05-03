class Tasks {
    getTasksList() {
			return new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();
				xhr.open('GET', 'http://localhost:4000/api/tasks', true);
				xhr.onload = () => resolve(JSON.parse(xhr.response));
				xhr.onerror = (e) => reject('Server error')
				xhr.send();
			})
	}

	getServerState() {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', 'http://localhost:4000/api/state', true);
			xhr.onload = () => resolve(JSON.parse(xhr.response));
			xhr.onerror = (e) => reject('Server error')
			xhr.send();
		})
}

    addTask(data) {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://localhost:4000/api/task', true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = () => resolve(JSON.parse(xhr.response));
			xhr.send(JSON.stringify(data));
		});
	}

	removeTask(id) {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();
			xhr.open('DELETE', `http://localhost:4000/api/task/${id}`, true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = () => resolve();
			xhr.send();
		});
	}

	changeTaskStatus(data) {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();
			xhr.open('PUT', `http://localhost:4000/api/changeStatus`, true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = () => resolve();
			xhr.send(JSON.stringify(data));
		});
	}

	getTask(id) {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', `http://localhost:4000/api/task/${id}`, true);
			xhr.onload = () => resolve(JSON.parse(xhr.response));
			xhr.send();
		});
	}

	updateTask(data) {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();
			xhr.open('POST', `http://localhost:4000/api/updateTask`, true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = () => resolve();
			xhr.send(JSON.stringify(data));
		});
	}
}

export default Tasks;