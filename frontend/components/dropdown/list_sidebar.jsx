import React from 'react';
import ListFormContainer from '../list_form/list_form_container';

class ListSidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      showSidebar: true,
      showListForm: false
    }

    this.renderCount = 0;

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleListForm = this.toggleListForm.bind(this);
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

    return (
      <div>
        <i onClick={this.toggleSidebar} className="fas fa-bars"></i>

        {
          this.state.showSidebar
            ? (
              <div className="sidebar">
                <img src="/bee_logo.png" alt="HoneySplash"/>
                <h2 onClick={this.toggleListForm}>Lists</h2>

                {this.renderCount}

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

// <SlideDown className="slidedown" closed>
//   {this.renderCount += 1}
//   {`${this.state.showSidebar}`}
//   <div>
//     <ul>
//       <li> Sidebar item 1 </li>
//       <br/>
//       <li> Sidebar item 2 </li>
//       <br/>
//       <li> Sidebar item 3 </li>
//       <br/>
//     </ul>
//   </div>
// </SlideDown>



// <button onClick={this.showSidebar}>
//   Show Sidebar
// </button>

export default ListSidebar;
