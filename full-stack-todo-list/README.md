# Full Stack To-Do List Application

A full-stack To-Do List application built using **React.js, Java Spring Boot, and MySQL**. It allows users to manage their daily tasks with a simple and interactive interface.

## Features

- Add new tasks
- View all tasks
- Update task details
- Mark tasks as completed or incomplete
- Delete tasks
- Store tasks in a MySQL database
- REST API integration between frontend and backend
- Responsive user interface
- Modal form for adding tasks

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- JavaScript

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

### Database
- MySQL

### Tools
- VS Code
- MySQL Workbench
- Git and GitHub
- Postman


## Prerequisites

Make sure you have the following installed:

- Java JDK
- Maven
- Node.js and npm
- MySQL
- Git

## Instructions

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Nikitarathod2001/java-projects.git
```

Navigate to the project directory:

```bash
cd full-stack-todo-list
```

### 2. Database Setup

Open MySQL Workbench and execute the following query:

```sql
CREATE DATABASE todo_db;
```

### 3. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Configure your database connection in:

`src/main/resources/application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=root
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.open-in-view=false
```

Set your MySQL password as an environment variable in PowerShell:

```powershell
$env:DB_PASSWORD = "YOUR_ACTUAL_MYSQL_PASSWORD"
```

Run the Spring Boot application:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend will start at:

```text
http://localhost:8080
```

### 4. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

#### Configure Frontend Environment Variables

Create a `.env` file inside the `frontend` directory.

Add the following variable:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

The frontend uses this environment variable to configure the Axios base URL for HTTP requests.

The Axios instance in `src/api/taskService.js` reads the variable like this:

```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will start at:

```text
http://localhost:5173
```


## Application Workflow

1. The user interacts with the React frontend.
2. Axios sends HTTP requests to the Spring Boot backend.
3. Spring Boot handles the incoming API requests.
4. Spring Data JPA communicates with the MySQL database.
5. The backend sends the response to the frontend.
6. React updates the user interface based on the response.

## Learning Outcomes

Through this project, I gained practical experience with:

- Building REST APIs using Java Spring Boot.
- Implementing CRUD operations.
- Connecting Spring Boot with MySQL.
- Using Spring Data JPA and Hibernate.
- Developing frontend components using React.
- Integrating frontend and backend using Axios.
- Managing environment variables.
- Using Git and GitHub for version control.
- Understanding full-stack application architecture.

## Author

**Nikita Rathod**
