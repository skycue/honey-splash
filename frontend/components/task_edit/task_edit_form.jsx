import React from 'react';

class TaskEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.tasks[parseInt(this.props.match.params.task_id)].title
    };
  }

  componentDidUpdate(prevProps) {
     // #2?
    if (prevProps.match.params.task_id != this.props.match.params.task_id) {
      debugger
      this.props.deselectTask(this.props.tasks[prevProps.match.params.task_id]);
      this.setState({ title: this.props.tasks[parseInt(this.props.match.params.task_id)].title})
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
     // #2?
    return (
      <form className="task-edit-form">
        <input className="task-edit-input"
          type="text"
          onChange={this.update("title")}
          value={this.state.title}
        />

        <div className="task-edit-close">
          close
          <i className="material-icons cancel-icon">cancel</i>
        </div>
      </form>

    );
  }
}

export default TaskEditForm;
