import React from "react";
import TodoListItem from "./TodoListItem";



const TodoList: React.FC<ITodoList> = ({todos}) => {
  console.log(todos);
  return (
    <ul>
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
