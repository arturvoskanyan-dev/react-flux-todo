import React from 'react'
import ListItem from './ListItem/ListItem'

export default function List({ todos, dispatch }) {
  return (
    <section>
      <ul className='max-h-todo overflow-y-scroll list'>
        {
          todos.map((todo) => {
            return (
              <ListItem 
                id={todo.id}
                key={todo.id}
                text={todo.text}
                dispatch={dispatch}
                completed={todo.completed}
              />
            )
          })
        }
      </ul>
    </section>
  )
}
