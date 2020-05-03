const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
	  fs = require('file-system'),
	  shortId = require('shortid'),
	  dataFile = 'tasks.json',
      app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

/* get task list */
app.get('/api/tasks', (req, res) => {
	setTimeout(() => {
		res.send(getTasksFromDB())
	}, 2000);
});

/* add task */
app.post('/api/task', (req, res) => {
	setTimeout(() => {
		const data = getTasksFromDB(),
			task = req.body;
		task.id = shortId.generate();
		task.text = task.text.trim() ? task.text : task.id.slice();
		task.description = task.description.trim() ? task.description : 'No description';
		task.status = 'Active';

		data.push(task);
		setTasksToDB(data);
	
		res.send(task);
	}, 2000)
});

/* change task status */
app.put('/api/changeStatus', (req, res) => {
	setTimeout(() => {
		const data = [...getTasksFromDB()],
			newData = [];
		data.forEach(item => {
			if (item.id !== req.body.id) {
			newData.push(item);
			} else {
			newData.push({
				id: item.id,
				text: item.text,
				description: item.description,
				status: req.body.status === 'Active' ? 'Done' : 'Active',
			})
			}
		});
		setTasksToDB(newData);

		res.send(newData);
	}, 2000)
});

/* update task */
app.post('/api/updateTask', (req, res) => {
	setTimeout(() => {
		const data = [...getTasksFromDB()],
			newData = [];

		data.forEach(item => {
			if (item.id !== req.body.id) {
			newData.push(item);
			} else {
			newData.push({
				id: item.id,
				text: req.body.text,
				description: req.body.description,
				status: req.body.status,
			})
			}
		});
		setTasksToDB(newData);

		res.send(newData);
	}, 2000)
});

/* get task to edit page */
app.get('/api/task/:id', (req, res) => {
	setTimeout(() => {
		const data = getTasksFromDB(),
			task = data.find(task => task.id === req.params.id);

		task ? res.send(JSON.stringify([task])) : res.send({});
	}, 2000)
});

/* remove task */
app.delete('/api/task/:id', (req, res) => {
	setTimeout(() => {
		const data = getTasksFromDB(),
			newData = data.filter(task => task.id !== req.params.id);

			setTasksToDB(newData);

		res.sendStatus(204);
	}, 2000)
});

function getTasksFromDB() {
    return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

function setTasksToDB(data) {
    fs.writeFileSync(dataFile, JSON.stringify(data));
}

app.listen(4000, () => console.log('Server has been started...'));