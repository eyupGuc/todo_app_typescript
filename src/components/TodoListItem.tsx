import React from 'react'

interface IListItem {
  item:TodoType;
}

const TodoListItem:React.FC<IListItem> = () => {
  return (
    <div>TodoListItem</div>
  )
}

export default TodoListItem