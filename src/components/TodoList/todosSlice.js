// Redux:
// const initState = [
//     { id: 1, name: 'Learn Yoga', completed: false, prioriry: 'Medium'},
//     { id: 2, name: 'Learn Redux', completed: true, prioriry: 'High'},
//     { id: 3, name: 'Learn JavaScript', completed: false, prioriry: 'Low'},
// ]

// const todoListReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'todoList/addTodo': 
//             return [
//                 ...state,
//                 action.payload
//             ]

//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => 
//                 todo.id === action.payload
//                     ? {...todo, completed: !todo.completed}
//                     : todo)
        
//         default:
//             return state;
//     }
// }

// export default todoListReducer

// Redux Toolkit:
import { createSlice } from "@reduxjs/toolkit";

export default createSlice ({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Yoga', completed: false, prioriry: 'Medium'},
        { id: 2, name: 'Learn Redux', completed: true, prioriry: 'High'},
        { id: 3, name: 'Learn JavaScript', completed: false, prioriry: 'Low'},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        }
    }
})