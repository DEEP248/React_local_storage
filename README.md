🧩 Task Management Learning (React + LocalStorage)

A React-based task management system featuring Admin and Employee dashboards, secure login, and dynamic task tracking — all with data persistence using localStorage.
🚀 Features

✅ Login System – Separate login for Admin and Employees
✅ Admin Dashboard – Assign, update, and track employee tasks
✅ Employee Dashboard – View and manage assigned tasks dynamically
✅ Task Status Tracking – Categorized as New, Active, Completed, or Failed
✅ Context API – Global state management for Auth and Task handling
✅ LocalStorage Integration – All data persists even after page reloads
✅ Responsive Dark UI – Built with Tailwind CSS for a modern, clean look

🛠️ Tech Stack
Technology	Description
⚛️ React	Frontend library
🎨 Tailwind CSS	Styling and responsive design
🧠 Context API	State management
💾 localStorage	Client-side data persistence
📂 Folder Structure
src/
├── components/
│   ├── Login/
│   ├── AdminDashboard/
│   ├── EmployeeDashboard/
│   ├── Tasks/
├── context/
│   ├── AuthProvider.js
│   ├── TaskProvider.js
├── data/
│   ├── employeeData.js
├── App.js
└── index.js

⚙️ Installation & Setup

Follow these steps to run the project locally:

Clone the repository

git clone https://github.com/yourusername/employee-task-manager.git


Navigate to project directory

cd employee-task-manager


Install dependencies

npm install


Run the development server

npm start


Open your browser at http://localhost:3000

🧠 Learning Highlights

📘 This project helped reinforce key React concepts such as:

useState and useContext hooks

Props drilling and state lifting

Context API for global state

localStorage data handling

Conditional rendering for dynamic buttons

Component-based architecture
