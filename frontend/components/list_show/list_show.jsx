import React from 'react';
import TaskItemContainer from '../task_item/task_item_container';

class ListShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      completeTabClicked: false,
      showCompletedTasks: false,
    };

    this.handleSubmitCreateTask = this.handleSubmitCreateTask.bind(this);
    this.handleShowCompletedTasks = this.handleShowCompletedTasks.bind(this);
    this.deleteSelectedTasks = this.deleteSelectedTasks.bind(this);
    this.completeSelectedTasks = this.completeSelectedTasks.bind(this);
    this.incompleteSelectedTasks = this.incompleteSelectedTasks.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks({list_id: this.props.match.params.list_id});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.list_id !== this.props.match.params.list_id) {
      this.props.fetchTasks({list_id: this.props.match.params.list_id});
      this.props.deselectAllTasks();
    }
  }

  handleSubmitCreateTask(e) {
    e.preventDefault();
    document.getElementById("task-create-input").value = "";
    const task = Object.assign({}, this.state);
    delete task["showCompletedTasks"];
    delete task["completeTabClicked"]; //Doesn't seem to change anything
    this.props.fetchLists(this.props.currentUserId); //Why does this let tasks be rendered properly?
    this.props.createTask(this.props.currentList.id, task);
    this.props.fetchLists(this.props.currentUserId);
  }

  handleShowCompletedTasks(e, showCompleted) {
    e.preventDefault();
    if (this.state.showCompletedTasks !== showCompleted) {
      this.setState({ showCompletedTasks: showCompleted, completeTabClicked: showCompleted });
    }
  }

  deleteSelectedTasks(e) {
    e.preventDefault();
    this.props.selectedTasks.forEach(task_id => {
      this.props.deleteTask(this.props.currentList.id, this.props.tasks[task_id]);
    })
    this.props.deselectAllTasks();
    const taskEditFormOpen = this.props.closeTaskFormIds.length > 0 ? true : false;
    this.props.removeTaskFormId();
    if (taskEditFormOpen) {
      // Close task form if there is a task form open
      this.props.history.push(`/lists/${this.props.currentList.id}`);
    }
  }

  completeSelectedTasks(e) {
    e.preventDefault();
    const tasks = this.props.tasks;
    this.props.selectedTasks.forEach(id => {
      const updatedTask = Object.assign({}, {id, title: tasks[id].title, complete: true, list_id: tasks[id].list_id});
      this.props.updateTask(this.props.currentList.id, updatedTask);
    })
  }

  incompleteSelectedTasks(e) {
    e.preventDefault();
    const tasks = this.props.tasks;
    this.props.selectedTasks.forEach(id => {
      const updatedTask = Object.assign({}, {id, title: tasks[id].title, complete: false, list_id: tasks[id].list_id});
      this.props.updateTask(this.props.currentList.id, updatedTask);
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    if (!this.props.currentList) {
      return null;
    }

    return (
      <div className="list-show">
        <h1 className="list-title">{this.props.currentList.title}</h1>

        <div className="task-completion-tabs">

          <div onClick={(e) => this.handleShowCompletedTasks(e, false)} className={`incomplete-tasks ${this.state.completeTabClicked}`}>
            Incomplete
          </div>

          <div onClick={(e) => this.handleShowCompletedTasks(e, true)} className={`complete-tasks ${this.state.completeTabClicked}`}>
            Complete
          </div>
        </div>

        <div className="task-options">
          <div onClick={this.deleteSelectedTasks} className="task-more-options">
            Delete
          </div>

          {
            this.state.showCompletedTasks
            ? (
              <div onClick={this.incompleteSelectedTasks} className="task-incomplete">
                Uncomplete
              </div>
            )
            : (
              <div onClick={this.completeSelectedTasks} className="task-complete">
                Complete
              </div>
            )
          }
        </div>

        {
          this.state.showCompletedTasks
          ? (
            null
          )
          : (
            <form onSubmit={this.handleSubmitCreateTask} className="task-title-form">
              <input id="task-create-input" className="task-title-input" type="text"
                placeholder="Add a task..."
                onChange={this.update('title')}
              />

              <input className="add-task-submit" type="submit" value="Add Task"/>
            </form>

          )
        }

        {
          this.state.showCompletedTasks
          ? (
            <ul>
              {
                this.props.currentTasks.filter(task => task.complete).map(task => (
                  <TaskItemContainer key={task.id} task={task}/>
                ))
              }
            </ul>
          )
          : (
            <ul>
              {
                this.props.currentTasks.filter(task => !task.complete).map(task => (
                  <TaskItemContainer key={task.id} task={task}/>
                ))
              }
            </ul>
          )
        }

      </div>
    );
  }
}

export default ListShow;
