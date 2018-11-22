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
    debugger
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
    debugger
    if (this.props.match.params.task_id) {
      this.setState({
        selected: false,
        openEditForm: false
      })
    }
    this.toggleSelectTask(e, selectedTask);
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
      <li>
        <i onClick={(e) => this.toggleSelectTask(e, this.props.task)} class="material-icons">check_box_outline_blank</i>
        <i class="material-icons">check</i>
        <h3 onClick={(e) => this.toggleSelectAndEditTask(e, this.props.task)}>{this.props.task.id}</h3>
      </li>
    );
  }
}

export default TaskItem;
