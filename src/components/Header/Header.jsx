import React from 'react'

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
            <button 
                onClick={() => dispatch({type : "add", payload : text})}
                className="p-2.5 w-20 bg-light-pink text-white rounded-md cursor-pointer duration-300 hover:bg-hover-pink"
            >Add</button>
        </form>
    </header>
  )
}
