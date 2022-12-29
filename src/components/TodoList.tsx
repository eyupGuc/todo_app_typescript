import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos,toggleTodo,deleteTodo,editTodo }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem key={item.id} item={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      ))}
    </ul>
  );
};

export default TodoList;
