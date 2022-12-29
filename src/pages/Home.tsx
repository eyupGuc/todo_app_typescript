import axios from "axios";

import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";
const url = "https://63aad50bfdc006ba604d4b4a.mockapi.io/todos";



const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (e) {
      console.log(e);
    }
  };

  const addTodo:AddFn = async(text)=>{
    const newTodo={
      task:text,
      isDone: false
    }
    try{
await axios.post(url,newTodo)
getTodos()

    }catch(e){console.log(e)}

  }
  useEffect(() => {
    getTodos();
  }, []);

  const toggleTodo:ToggleFn=async(item)=>{
    try{
      await axios.put(`${url}/${item.id}`,{...item,isDone:!item.isDone})
      getTodos();
    }catch(e){
      console.log(e);
    }
  }

  const deleteTodo:DeleteFn = async (id)=>{
    try{
await axios.delete(`${url}/${id}`)
getTodos();

    }catch(e){console.log(e);}
  }

  return (
    <div className="main">
      <InputForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;


