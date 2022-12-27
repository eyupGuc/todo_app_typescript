import React from "react";
import TodoListItem from "./TodoListItem";


interface ITodoList {
  todos: TodoType[]
}

const TodoList = () => {

  return (
    <ul>
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
