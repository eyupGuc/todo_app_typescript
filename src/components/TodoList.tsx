import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos,toggleTodo }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} toggleTodo={toggleTodo}/>
      ))}
    </ul>
  );
};

export default TodoList;
