import axios from "axios";

import React, { useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";
const url = "https://63aad50bfdc006ba604d4b4a.mockapi.io/todos";


const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  getTodos();

  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
