import React from 'react';
import ListFormContainer from '../list_form/list_form_container';
import { openModal } from '../../actions/modal_actions';
import { Redirect } from 'react-router-dom';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showListForm: false,
      showListOptions: null
    }

    // this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleListForm = this.toggleListForm.bind(this);
    this.toggleListOptions = this.toggleListOptions.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleShowList = this.handleShowList.bind(this);
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

  toggleListOptions(list_id) {

    if (this.state.showListOptions) {
      this.setState({
        showListOptions: null
      });
    } else {
      this.setState({
        showListOptions: list_id
      });
    }
  }

  handleDeleteList(list_user_id, list_id) {

    this.props.deleteList(list_user_id, list_id)
  }

  handleShowList(e, list_id) {
    e.preventDefault();

    this.props.setCurrentList(list_id);
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
              <i className="material-icons md-12 lists-options-icon">arrow_drop_down_circle</i>
              <i onClick={() => dispatch(openModal('Add'))} className="material-icons md-12 add-box-icon">add_box</i>

            </li>
            {
              this.props.lists.map(list => (
                <li onClick={(e) => this.handleShowList(e, list.id)} key={list.id}>
                  {list.title}
                  <i onClick={() => this.toggleListOptions(list.id)} className="material-icons md-12 list-options-icon">arrow_drop_down_circle</i>
                    {
                      this.state.showListOptions === list.id
                        ? (
                          <div className='list-options'>
                            <ul>
                              <li onClick={() => dispatch(openModal('Save', {selectedListId: list.id}))}>Rename list</li>
                              <li onClick={() => this.handleDeleteList(list.user_id, list.id)}>Remove list</li>
                            </ul>
                          </div>
                        )
                        : (
                          null
                        )
                    }
                </li>
              ))
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
