const express = require('express');
const app = express();
const tasks = require('./tasks');

app.use(express.json());

// Routes
app.get('/api/tasks', tasks.getTasks);
app.post('/api/tasks', tasks.createTask);
app.put('/api/tasks/:id', tasks.updateTask);
app.delete('/api/tasks/:id', tasks.deleteTask);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});