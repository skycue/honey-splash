import React from 'react';
import ListFormContainer from '../list_form/list_form_container';

class ListSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: true,
      showListForm: false
    }

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleListForm = this.toggleListForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists(this.props.currentUserId);
  }

  toggleSidebar(e) {
    e.preventDefault();

    if (this.state.showSidebar) {
      this.setState({
        showSidebar: false
      });
    } else {
      this.setState({
        showSidebar: true
      });
    }
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
      <div>
          <i onClick={this.toggleSidebar} className="material-icons">menu</i>
        {
          this.state.showSidebar
            ? (
              <div className="sidebar">
                <img src="/bee_logo.png" alt="HoneySplash"/>
                <h2 onClick={this.toggleListForm}>Lists</h2>

                {
                  this.state.showListForm
                    ? (
                      <ListFormContainer/>
                    )
                    : (
                      null
                    )
                }

                <ul>
                  {
                    lists
                    ? this.props.lists.map(list => (<li key={list.id}>{list.title}</li>))
                    : <h1>Uh oh</h1>
                  }
                </ul>

              </div>
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
