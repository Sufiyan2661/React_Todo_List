import { createContext, useContext, useState } from "react";


export const TodoContext = createContext()



export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([{
        id: 1,
        todo: 'todo Msg',
        completed: false,
    }])

    const addTodo = (todo) => {
        setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    }

    const deleteTodo = (id) =>{
        setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
    }
     const updateTodo = (id,todo) =>{
        setTodos((prev)=> prev.map((todo)=> (todo.id === id ? todo:todo)))
     }

     const toggleComplete = (id) =>{
        setTodos((prev)=> prev.map((todo)=> todo.id === id ? {...todo,completed: !todo.completed}: todo))
     }
    const data = {
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        todos,
        setTodos,
    }
    return (
        <TodoContext.Provider value={data}>
            {children}
        </TodoContext.Provider>
    )
}
export const useTodo = () => {
    return useContext(TodoContext)
}