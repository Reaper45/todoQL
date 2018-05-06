import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

export const TODO_QUERY = gql`{
  tasks: allTasks {
    nodes {
      id
      task
      done
    }
  }
}`

// Update todo done
const UPDATE_TASK = gql`
mutation updateTask($task: UpdateTaskInput!) {
  updateTask(input: $task) {
    task {
      id
      done
    }
  }
}`

// Update Todo Component
const MarkDoneAction = props => {
  const { id } = props.data
  return (
    <Mutation mutation={UPDATE_TASK}>
    {(updateTask, {loading, error} ) => (
      <a onClick={e => {
        e.preventDefault()
        updateTask({variables: { task: {id: id, taskPatch: {done: true }}}})
        }}>
        <i className="material-icons border rounded-circle">check</i>
      </a> 
    )}
    </Mutation>
  )
}


export const TodoQuery = props => {
  //

  return (<Query query = {TODO_QUERY}
    errorPolicy="all"
    notifyOnNetworkStatusChange >
    {
      ({client, loading, error, data}) => {
      if (loading) return <div className="alert alert-primary" role="alert"> Loadig...</div>;
      if (error) return <div className="alert alert-success" role="alert"> {error.message} </div>;
      
      return <div className="list-group list-group-flush">{
          data.tasks.nodes.map(({id, task, done}) => {
            return <li className={ done ? "list-group-item text-line-through" : "list-group-item" } key={task}>{task} 
            <span className="actions float-right"> 
              <MarkDoneAction data={{id}} />
              &nbsp; &nbsp;
            <a>
              <i className="material-icons border rounded-circle">clear</i></a></span></li>
          })
        }</div>
      }
    }
  </Query>);
}
