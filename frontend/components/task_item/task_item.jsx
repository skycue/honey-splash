import React from 'react';

class TaskItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        {this.props.task.id}
      </li>
    );
  }
}

export default TaskItem;
