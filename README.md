# 📦 Osumare Backend Task

A simple and efficient RESTful API built using **Node.js** and **Express.js** for managing tasks. The API supports basic **CRUD operations (Create, Read, Update, Delete)** and uses in-memory storage (no database required).

---

## 🚀 Features

- Task **Create, Read, Update, Delete (CRUD)** functionality.
- **In-memory data storage** (no database integration).
- **Basic validation** for required task properties.
- Clean, simple, and easy-to-use REST API endpoints.
- Graceful error handling with appropriate status codes.

---

## 📁 Project Folder Structure

backend/ │ ├── app.js // Application setup and route configurations
           ├── tasks.js // Task data storage and controller logic 
           └── README.md // Project documentation

           
---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ayush789815/Osumare_Backend_task.git

2 **Navigate to Project Directory**
   cd Osumare_Backend_task/backend

3 **Install Dependencies**
    npm install
 
4 **Start the Server**
    Start the Server


    API Documentation
📌 Base URL
http://localhost:3000/api/tasks
📌 API Endpoints
📍 GET /api/tasks
Retrieve all tasks.

Request:

Method: GET

Response:{
  "status": "success",
  "results": 2,
  "data": [
    {
      "id": 1,
      "title": "Task 1",
      "description": "Description for Task 1"
    },
    {
      "id": 2,
      "title": "Task 2",
      "description": "Description for Task 2"
    }
  ]
}

📍 POST /api/tasks
Create a new task.

Request:

Method: POST

Body (JSON):
{
  "title": "New Task",
  "description": "This is a new task"
}
Response:
{
  "id": 123456789,
  "title": "New Task",
  "description": "This is a new task"
}

📍 PUT /api/tasks/:id
Update an existing task by ID.

Request:

Method: PUT

URL: http://localhost:3000/api/tasks/1

Body (JSON):
{
  "title": "Updated Task",
  "description": "This is an updated task"
}
Response:
{
  "id": 1,
  "title": "Updated Task",
  "description": "This is an updated task"
}
📍 DELETE /api/tasks/:id
Delete a task by ID.

Request:

Method: DELETE

URL: http://localhost:3000/api/tasks/1

Response:
{
  "message": "Task deleted successfully"
}
❌ Error Handling
Validation Errors
If title or description is missing in POST or PUT requests:

Response:
{
  "message": "Title and description are required"
}

📄 License
This project is licensed under the ISC License.
