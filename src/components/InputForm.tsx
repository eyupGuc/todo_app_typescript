import React, { useState } from "react";

interface IInputForm {
  addTodo: AddFn;
  editTodo:EditTodoFn
  
}

const InputForm: React.FC<IInputForm> = ({ addTodo ,editTodo}) => {
  const [task, setTask] = useState("");

  const handleClick = () => {
   
    addTodo(task);
    setTask("");
  };

  const handleEdit=()=>{
    
  }

  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={handleClick}
        disabled={!task}
      >
        Add New Todo
      </button>
    </div>
  );
};

export default InputForm;
