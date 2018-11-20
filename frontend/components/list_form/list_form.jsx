import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      id: this.props.selectedListId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = Object.assign({}, this.state);
    this.props.processForm(this.props.currentUserId, list, this.props.instruction);
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="list-form-box">
        <i onClick={this.props.closeModal} className="material-icons cancel-icon">cancel</i>

        <h1>Add a List</h1>

        <label>
          Please enter a new list name:
          <input type="text"
            value={this.state.listTitle}
            onChange={this.update('title')}
          />
        </label>

        <div className='list-form-buttons'>
          <input type="submit" value={this.props.instruction}/>
          <div onClick={this.props.closeModal}>
            Cancel
          </div>
        </div>
      </form>
    );
  }
}

export default ListForm;
