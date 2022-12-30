import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo:DeleteFn;
  editTodo:EditTodoFn;
}

const TodoListItem: React.FC<IListItem> = ({ item, toggleTodo,deleteTodo,editTodo }) => {
  console.log(item);
  return (
    <li >
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
      {/* <span className="task-icons" onClick={()=>editTodo(item)}><AiFillEdit/></span> */}
    </li>
  );
};

export default TodoListItem;
