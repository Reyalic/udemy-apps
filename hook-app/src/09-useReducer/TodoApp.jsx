import { useTodo } from "../hooks"
import TodoAdd from "./TodoAdd"
import TodoList from "./TodoList"

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodo()

  return (
    <>
        <h1>Todo App {todosCount}, <small>incomplete: {pendingTodosCount}</small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo} 
                    onToggleTodo={ handleToggleTodo }
                />
            </div>
            <div className="col-5">
                <h4>Add TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo} />
            </div>
        </div>
    </>
  )
}
