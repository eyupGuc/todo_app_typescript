import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
