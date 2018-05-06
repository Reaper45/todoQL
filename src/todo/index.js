import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo';

function Todo() {
  const handleSubmit = (e) => {
    console.log("hit")
    e.preventDefault()
  }
  return (
    <div>
      <div className="card text-left mt-5" style={{margin: "0 auto", maxWidth: "600px"}}>
        <div className="card-body">
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default Todo;
