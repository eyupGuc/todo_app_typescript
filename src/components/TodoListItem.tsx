import React from "react";
import { AiFillDelete } from "react-icons/ai";

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
}

const TodoListItem: React.FC<IListItem> = ({ item, toggleTodo }) => {
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
      <span className="task-icons">
        <AiFillDelete />
      </span>
    </li>
  );
};

export default TodoListItem;
