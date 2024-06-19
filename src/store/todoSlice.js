import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: uuidv4(), title: 'Transfer work with data to Redux', done: true },
            { id: uuidv4(), title: 'Register an account in Firebase', done: false },
            { id: uuidv4(), title: 'Setting up Firebase in a project', done: false },
            { id: uuidv4(), title: 'Transfer data to Firebase Firestore', done: false },
        ],
        filter: 'all',
        filterButtons: {
            all: true,
            completed: false,
            uncompleted: false
        },
        searchQuery: '',
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: uuidv4(),
                title: action.payload.title,
                done: false
            });
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        changeStatusTodo(state, action) {
            state.todos = state.todos.map(todo =>
                todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
            );
        },
        saveTodo(state, action) {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.title = action.payload.title;
                }
                return todo;
            });
        },
        deleteTodoList(state) {
            state.todos = [];
        },
        filterTodoList(state, action) {
            state.filter = action.payload.filter;
            state.filterButtons = {
                all: action.payload.filter === 'all',
                completed: action.payload.filter === 'completed',
                uncompleted: action.payload.filter === 'uncompleted'
            }
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload.searchQuery;
        },
    }
});

export const {
    addTodo,
    deleteTodo,
    changeStatusTodo,
    saveTodo,
    deleteTodoList,
    filterTodoList,
    setSearchQuery,
} = todoSlice.actions;

export default todoSlice.reducer;