import React from 'react';
import { graphql } from 'react-apollo';
import Tasks from './queries/tasks.gql';
import AddTodoForm from './AddTodoForm'; 

@graphql(Tasks)
class Todo extends React.Component {
  handleSubmit(values) {
		console.log(values)
	}
  render() {
    const { tasks } = this.props.data;
    return (
      <div className="card">
        <AddTodoForm onSubmit={this.handleSubmit}/>
        <ul>
          {
            !tasks.nodes ?
              <h3> No tasks! </h3> :
              tasks.nodes.map(task => <li key={task.id}>{task.task}</li>)
          }
        </ul>
      </div>
    );
  }
}
export default Todo;
