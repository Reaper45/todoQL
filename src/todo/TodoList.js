import React, { Component } from 'react';
import {TodoQuery} from './queries/TodoQuery'

export default class TodoList extends Component {
  render() {
    const markDone = event => {
      event.preventDefault()
      console.log(event.target)
    }
    const deleteTask = event => {
      event.preventDefault()      
      console.log(event.target)
    }
    return (
      <div>
        <TodoQuery markDone={markDone} deleteTask={deleteTask}/>
      </div>
    )
  }
}
