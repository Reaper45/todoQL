import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { TODO_QUERY } from './queries/TodoQuery';
// import TodoForm from './TodoForm';


// Create new todo
const NEW_TODO_QUERY = gql`
mutation addTodo($todo: CreateTaskInput!) {
  createTask(input: $todo) {
    task {
      id
      task
      createdBy
      done
    }
  }
}`

class AddTodo extends Component {
  render() {
    let task;
    //
    const update = (cache, { data: { createTask } }) => {
      const {tasks} = cache.readQuery({ query: TODO_QUERY });
      
      cache.writeQuery({
        query: TODO_QUERY,
        data: { tasks: {nodes: [...tasks.nodes, createTask.task]}}
      });
                
    }
    //
    return (
      <Mutation 
        mutation={NEW_TODO_QUERY}
        update={update}
        >
        {(addTodo, {data}) => (
          <form onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { todo: { task: { task: task.value, createdBy: 2, done: false} } }});
            task.value = "";
          }}>
            <div  className="row mb-4">
              <div className="col-10">
                <input className="form-control" type="text" ref={node=>{task = node}}/>
              </div>
              <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
              </div>
            </div>
          </form>
        )}
      </Mutation>
    )
  }
}

export default AddTodo;