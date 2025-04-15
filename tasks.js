let tasks = []; // In-memory storage for tasks

exports.getTasks = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: tasks,
    });
};

exports.createTask = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const newTask = {
        id: Date.now(),
        title,
        description,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: 'Task not found' });

    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    task.title = title;
    task.description = description;
    res.status(200).json(task);
};

exports.deleteTask = (req, res) => {
    const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Task not found' });

    tasks.splice(index, 1);
    res.status(204).json({ message: 'Task deleted successfully' });
};