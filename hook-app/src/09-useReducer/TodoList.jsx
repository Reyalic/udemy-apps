import React from 'react'

const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
                    {
                        todos.map( todo => (
                            <li key={todo.id} className="list-group-item d-flex justify-content-between">
                                <span 
                                    className={`align-self-center ${todo.done ? "text-decoration-line-through" : ""}`}
                                    onClick={() => onToggleTodo(todo.id)}
                                    >{todo.description}
                                </span>
                                <button 
                                    onClick={ () => onDeleteTodo (todo.id) } 
                                    className="btn btn-danger"
                                    >Delete
                                </button>
                            </li>
                        ))
                    }
                </ul>
  )
}

export default TodoList