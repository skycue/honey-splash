import React from 'react';
import ListFormContainer from '../list_form/list_form_container';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showListForm: false
    }

    // this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleListForm = this.toggleListForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists(this.props.currentUserId);
  }

  toggleListForm(e) {
    e.preventDefault();
    this.renderCount += 1;

    if (this.state.showListForm) {
      this.setState({
        showListForm: false
      });
    } else {
      this.setState({
        showListForm: true
      });
    }
  }

  render() {
    const { lists } = this.props;
    return (
      <div className="sidebar">
        <img src="/bee_logo.png" alt="HoneySplash"/>

        <div className="all-lists">
          <ul>
            <li>
              <i className="material-icons md-17 drop-down-icon">arrow_drop_down</i>
              Lists
              <i onClick={this.toggleListForm} className="material-icons md-12 add-box-icon">add_box</i>
            </li>
            {
              this.props.lists.map(list => (<li key={list.id}>{list.title}</li>))
            }
          </ul>
        </div>

        {
          this.state.showListForm
            ? (
              <ListFormContainer/>
            )
            : (
              null
            )
        }



      </div>
    );
  }
}

export default ListSidebar;
