import { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components/index";
import "./App.css";
import { useTodo } from "./context/TodoContext";


function App() {

  const {todos,setTodos} = useTodo()
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
 
      <div className="min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and add Todo item here */}
            {todos.map((todo)=>{
              return(
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>

  );
}

export default App;
