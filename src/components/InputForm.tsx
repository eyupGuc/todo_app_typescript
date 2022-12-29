import React from 'react'

interface IInputForm {
  addTodo:AddFn;
}


const InputForm:React.FC<IInputForm> = () => {
  
  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        
      />
      <button
        className="btn-hover btn-color"
        type="submit"
      >
        Add New Todo
      </button>
    </div>
  )
}

export default InputForm