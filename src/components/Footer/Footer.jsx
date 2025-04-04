import React from 'react'
import AddClearBtn from '../AddClearBtn/AddClearBtn'

export default function Footer({todos, dispatch}) {
  const tasks = todos.filter(todo => todo.completed)

  return (
    <footer className='flex justify-between items-center border-t-2 border-pink'>
        <span className="text-white">You have {tasks.length}/{todos.length}</span>
        {todos.length > 0 && <AddClearBtn btnClick={() => dispatch({type : "clearAll", payload: []})}>Clear All</AddClearBtn>}
    </footer>
  )
}
