import React from "react";
import { AiFillDelete } from "react-icons/ai";

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo:DeleteFn;
}

const TodoListItem: React.FC<IListItem> = ({ item, toggleTodo,deleteTodo }) => {
  console.log(item);
  return (
    <li onClick={() => toggleTodo(item)}>
      {item.isDone ? (
        <p className="checked" onClick={() => toggleTodo(item)}>
          {item.task}
        </p>
      ) : (
        <p onClick={() => toggleTodo(item)}>{item.task}</p>
      )}
      <span className="task-icons" onClick={()=>deleteTodo(item.id)}>
        <AiFillDelete />
      </span>
    </li>
  );
};

export default TodoListItem;
