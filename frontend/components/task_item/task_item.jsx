import React from 'react';

class TaskItem extends React.Component {
  constructor(props) {
    super(props)
    let selected = false;
    if (this.props.selectedTaskIds.includes(this.props.task.id)) {
      selected = true;
    }

    let openEditForm = false;
    if (this.props.closeTaskFormIds[0] === this.props.task.id) {
      openEditForm = true;
    }

    this.state = {
      selected,
      openEditForm
    }

    this.toggleSelectTask = this.toggleSelectTask.bind(this);
    this.toggleSelectAndEditTask = this.toggleSelectAndEditTask.bind(this);
  }

  componentDidUpdate(prevProps) {
    const closeTaskFormIds = this.props.closeTaskFormIds;
    const openEditForm = this.state.openEditForm;
    const task = this.props.task;

    // Case 1:  Current task is the task with open form
    // selected should be true
    // openEditForm should be true
    if (closeTaskFormIds[0] === task.id && closeTaskFormIds.length > 1) {
      // Deselect task and close edit form
      this.setState({
        selected: false,
        openEditForm: false
      })

      this.props.deselectTask(task);
      this.props.removeTaskFormId();
    }

    // On opening a task edit form, all other selected tasks should be deselected
    // if (this.props.selectedTaskIds.includes(this.props.task.id) && this.props.closeTaskFormIds.length > 0) {
    //   this.setState({
    //     selected: false
    //   })
    // }
  }

  toggleSelectTask(e, selectedTask) {
    e.preventDefault();

    if (this.state.selected && !this.state.openEditForm) {
      this.setState({
        openEditForm: true
      })
    } else if (this.state.selected) {
      this.setState({
        selected: false,
        openEditForm: false
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
    e.preventDefault();
    if (this.props.match.params.task_id) {
      this.setState({
        selected: false,
        openEditForm: false
      })
    }
    this.toggleSelectTask(e, selectedTask);
    this.props.setCurrentTaskForm(this.props.task);
    if (this.state.openEditForm) {
      // this.setState({
      //   openEditForm: false
      // })
      this.props.history.push(`/lists/${this.props.currentListId}`);
    } else {
      // if (!this.state.selected) {
      //   this.setState({
      //     openEditForm: true,
      //     selected: true
      //   })
      //   this.props.selectTask(selectedTask);
      // } else {
        // this.setState({
        //   openEditForm: true,
        // })
      // }

      // Empty selectedTasks ui slice of state on opening edit task form
      // this.props.deselectAllTasks();
      this.props.history.push(`/lists/${this.props.currentListId}/tasks/${this.props.task.id}`);
    }
  }

  render() {
    return (
      <li className="task-item">
        <i onClick={(e) => this.toggleSelectTask(e, this.props.task)}
          className={`material-icons check-box-icon-${this.state.selected}`}>check_box_outline_blank</i>
        <i onClick={(e) => this.toggleSelectTask(e, this.props.task)}
          className={`material-icons check-icon-${this.state.selected}`}>check</i>
        <h3 onClick={(e) => this.toggleSelectAndEditTask(e, this.props.task)} className="task-title">{this.props.task.title}</h3>
      </li>
    );
  }
}

export default TaskItem;
