# Reconciler-Using-DOM

## Introduction
This project offers a simplified React reconciliation algorithm demonstration within a dynamic Todo List application. It highlights diff calculation and DOM manipulation for element addition, update, and removal, mirroring React and ReactDOM's core functions.


## Installation

#### Backend
```bash
git clone https://github.com/starvader13/Reconciler-Using-DOM.git
cd Reconciler-Using-DOM/backend
npm install
nodemon server.js
```

#### Frontend
Open the `frontend/index.html` file in a web browser to interact with the application. The frontend will automatically fetch updates from the backend every 5 seconds, reflecting any changes in the todo list.

## Understanding the Code

### Project-Root Structure
```
project-root
├── backend
│ └── server.js # Node.js server that generates random todos
├── frontend
│ ├── index.html # Main HTML file with a div container for todos
│ └── script.js # Contains logic for DOM updates and state management
└── README.md # Documentation of the project
```

### Backend
The backend is a HTTP express server that simulates a dynamic source of todo items, each represented with a `title`, `description`, and `id`.

### Frontend

- **`index.html`**: A single `div` element with the id `todos` acts as the container for dynamically added todo elements.
- **`script.js`**:
  - **Reconciliation and State Management**: The `updateState` function in `script.js` showcases a simplified version of React's reconciliation process, managing state transitions and efficient DOM updates.
  - **DOM Operations**: Functions `addTodoToDom`, `removeTodoFromDom`, and `updateTodoInDom` provide insights into manual DOM manipulation strategies, forming the basis for understanding frameworks like React.
