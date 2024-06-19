#The published version of the web application
<https://freon37.github.io/to_do_list/>

# To-do list

This is a simple to-do list web application created using React.

*Read it in other languages: [English](README.md), [Русский](README.ru.md).*

## Table of Contents
  - [Functional](#functional)
  - [Features](#features)
  - [Installation](#installation)
  - [⚙ Configuration](#-configuration)
    - [🛠 Technical stack](#-technical-stack)
    - [🛠 Tools](#-tools)
  - [Useful materials](#useful-materials)
  
## Functional

- Adding tasks: Users can enter new tasks in the input box and click the "Add" button to add them to the list.
- Editing a task: Users can click the edit icon next to a task to edit its name.
- Deleting a task: Users can click the delete icon next to a task to remove it from the list.
- Changing task status: users can click on the open lock next to a task to mark it as completed.
- Deleting all tasks: Users can click on the "Delete All" link to delete all tasks.
- Filter Tasks: Users can use the "All", "Completed", "Uncompleted" buttons to filter tasks based on their completion status.
- Search Task: Users can search for the desired task in the input field.

### Features

- Saving data (task list) on the client side to LocalStorage.
    This feature allows you to efficiently work with the web application even after page reloading.

## Installation

1. Cloning a repository

```bash
git clone https://github.com/Freon37/to_do_list.git
```

2. Switching to the project directory 

```bash
cd to_do_list
```

3. Installing dependencies

```bash
npm install
```

4. Launching the application

```bash
npm run dev
```

## ⚙ Configuration

 ### 🛠 Technical stack
   - React
   - Redux Toolkit
   - React Redux
   - Redux Persist
   - HTML
   - CSS
   - Javascript
 
 ### 🛠 Tools
   - Vite
     - React - JavaScript
   - CSS Modules (**.module.css)
   - uuid
   - @phosphor-icons/react

## Useful materials

- [React](https://react.dev/learn) - A JavaScript library used to create user interfaces;
- [CSS Modules](https://github.com/css-modules/css-modules/blob/master/README.md) - CSS Modules is a popular system for modularity and CSS layout. This approach was used in this project;
- [uuid](https://github.com/uuidjs/uuid) - A JavaScript library for creating unique identifiers;
- [Phosphor Icons](https://phosphoricons.com/) - A flexible and customizable icon library for modern web projects;
- [Redux](https://redux.js.org/) - A JavaScript library for predictable and maintainable global state management;
- [Redux Toolkit](https://redux-toolkit.js.org/) - A JavaScript library for efficient and standardized Redux development;
- [Redux Persist](https://github.com/rt2zz/redux-persist#readme) - A JavaScript library for preserving and rehydrating Redux state;
- [React Redux](https://github.com/reduxjs/react-redux) - A JavaScript library for integrating Redux with React applications;
