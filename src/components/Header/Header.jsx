import React from 'react'
import AddClearBtn from '../AddClearBtn/AddClearBtn'

export default function Header({text, dispatch}) {
  return (
    <header className="mb-4">
        <article>
            <h1 className='p-2 text-white text-3xl font-black'>ToDo List</h1>
        </article>
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text" 
                value={text} 
                className="p-1.5 mr-4 w-full text-white border-2 border-pink rounded-sm"
                onChange={(e) => dispatch({type : "text", payload : e.target.value})} 
            />
            <AddClearBtn btnClick={() => dispatch({type : "add", payload : text})}>Add</AddClearBtn>
        </form>
    </header>
  )
}
