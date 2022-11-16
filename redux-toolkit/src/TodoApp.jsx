import React, { useState } from 'react'
import { useGetTodoByIdQuery } from './store/api/todosApi.JS'
import { useGetTodosQuery } from './store/api/todosApi.JS'

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)

    // const { data: todos = [], isLoading } = useGetTodosQuery()
    const { data: todo, isLoading } = useGetTodoByIdQuery( todoId )

    const nextTodo = () => {
        setTodoId( todoId + 1 )
    }

    const prevTodo = () => {
        if ( todoId === 1 ) return
        setTodoId( todoId - 1)
    }
  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? "True" : "False" }</h4>

        <pre>{ JSON.stringify(todo) }</pre>

        {/* <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? "Done" : "Pending"}</strong>
                        {todo.title}
                    </li>
                ))
            }
        </ul> */}

        {/* <button>Next Todo</button> */}

        <button onClick={prevTodo}>Prev</button>
        <button onClick={nextTodo}>Next</button>
    </>
  )
}