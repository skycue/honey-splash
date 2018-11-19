import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = Object.assign({}, this.state);
    this.props.processForm(this.props.currentUserId, list);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="list-form-box">

        <h1>Add a List</h1>
        <h2>Please enter a new list name:</h2>

        <label>
          <input type="text"
            value={this.state.listTitle}
            onChange={this.update('title')}
          />
        </label>

          <input type="submit" value="Add"/>

      </form>
    );
  }
}

export default ListForm;
