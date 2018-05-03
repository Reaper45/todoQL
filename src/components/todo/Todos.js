import React from 'react';
import { graphql } from 'react-apollo';
import Tasks from './queries/tasks.gql';

@graphql(Tasks)
class Todo extends React.Component {
  render() {
    const { tasks } = this.props.data;
    console.log(this.props);
    return (
      <div className="card">
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
