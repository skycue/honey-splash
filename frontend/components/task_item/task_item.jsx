import React from 'react';

class TaskItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: false,
      openEditForm: false
    }

    this.toggleSelectTask = this.toggleSelectTask.bind(this);
    this.toggleSelectAndEditTask = this.toggleSelectAndEditTask.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.closeTaskFormIds.length === 2 && this.props.closeTaskFormIds[0] === this.props.task.id) {
      this.setState({
        selected: false,
        openEditForm: false
      })
      // this.props.deselectTask(this.props.task);
      this.props.removeTaskFormId();
    }
  }

  toggleSelectTask(e, selectedTask) {
    e.preventDefault();

    if (this.state.selected) {
      this.setState({
        selected: false
      })
      this.props.deselectTask(selectedTask);
    } else {
      this.setState({
        selected: true
      })
      this.props.selectTask(selectedTask);
    }
  }

  toggleSelectAndEditTask(e, selectedTask) {
    if (this.props.match.params.task_id) {
      this.setState({
        selected: false,
        openEditForm: false
      })
    }
    this.toggleSelectTask(e, selectedTask);
    this.props.setCurrentTaskForm(this.props.task);
    if (this.state.openEditForm) {
      this.setState({
        openEditForm: false
      })
      this.props.history.push(`/lists/${this.props.currentListId}`);
    } else {
      this.setState({
        openEditForm: true
      })
       // #1 Check this.props.match.params.task_id && path
      // if (this.props.match.params.task_id) {
      //   this.props.deselectTask(this.props.tasks[this.props.match.params.task_id]);
      //
      // }

      this.props.history.push(`/lists/${this.props.currentListId}/tasks/${this.props.task.id}`);
    }
  }

  render() {
    return (
      <li className="task-item">
        <i onClick={(e) => this.toggleSelectTask(e, this.props.task)} className={`material-icons check-box-icon-${this.state.selected}`}>check_box_outline_blank</i>
        <i onClick={(e) => this.toggleSelectTask(e, this.props.task)} className={`material-icons check-icon-${this.state.selected}`}>check</i>
        <h3 onClick={(e) => this.toggleSelectAndEditTask(e, this.props.task)} className="task-title">{this.props.task.title}</h3>
      </li>
    );
  }
}

export default TaskItem;
