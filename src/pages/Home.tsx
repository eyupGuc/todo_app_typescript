import axios from "axios";

import React, { useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";
const url = 'https://63aad50bfdc006ba604d4b4a.mockapi.io/todos'
interface TodoType  {
id:string | number;
task:string ;
isDone:Boolean;
}

const Home = () => {
const [todos,setTodos]=useState<TodoType[]>([]);

const getTodos=async()=>{
 const {data} = await axios(url)
 console.log(data)

}
getTodos()


  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
