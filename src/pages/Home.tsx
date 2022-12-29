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
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
