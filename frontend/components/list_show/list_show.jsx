import React from 'react';

class ListShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      complete: false,
      showCompletedTasks: false,
    };


    this.handleSubmitCreateTask = this.handleSubmitCreateTask.bind(this);
    this.handleShowCompletedTasks = this.handleShowCompletedTasks.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks(this.props.match.params.list_id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.list_id !== this.props.match.params.list_id) {
      this.props.fetchTasks(this.props.match.params.list_id);
    }
  }

  handleSubmitCreateTask(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state);
    delete task["showCompletedTasks"];
    this.props.createTask(this.props.currentList.id, task);
  }

  handleShowCompletedTasks(e, showCompleted) {
    e.preventDefault();
    if (this.state.showCompletedTasks !== showCompleted) {
      this.setState({ showCompletedTasks: showCompleted });
    }
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
        <h1>{this.props.currentList.title}</h1>

        <div className="task-completion-tabs">

          <div onClick={(e) => this.handleShowCompletedTasks(e, false)} className="incomplete-tasks">
            Incomplete
          </div>

          <div onClick={(e) => this.handleShowCompletedTasks(e, true)} className="complete-tasks">
            Complete
          </div>
        </div>

        <div className="task-options">
          Delete Task
        </div>

        {
          this.state.showCompletedTasks
          ? (
            null
          )
          : (
            <form onSubmit={this.handleSubmitCreateTask} className="task-title-form">
              <input className="task-title-input" type="text"
                value={this.state.title}
                placeholder="Add a task..."
                onChange={this.update('title')}
              />

            <input type="submit" value="Add Task"/>
            </form>
          )
        }

        <ul>
          {
            this.props.tasks.map(task => (
              <li key={task.id}>
                {task.title}
              </li>
            ))
          }
        </ul>

      </div>
    );
  }
}

export default ListShow;
