import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ListSidebarContainer from '../dropdown/list_sidebar_container';
import ListShowContainer from '../list_show/list_show_container';
import { Route } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: true,
      showSettings: false
    }

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);

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

  toggleSettings(e) {
    e.preventDefault();

    if (this.state.showSettings) {
      this.setState({
        showSettings: false
      });
    } else {
      this.setState({
        showSettings: true
      });
    }
  }

  sessionLinks() {
    return (
      <Redirect to="/login" />
    );
  }

  appPage() {
    return (
      <div className="main-page">

        <header className="main-nav">
          <nav className="left-nav">
            <i onClick={this.toggleSidebar} className="material-icons">menu</i>
          </nav>

          <nav className="right-nav">
            <ul>
              <li className="gear-dropdown-btn">
                <i onClick={this.toggleSettings} className="material-icons">settings</i>
              </li>

              {
                this.state.showSettings
                  ? (
                    <div className="settings">
                      <ul>
                        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                      </ul>
                    </div>
                  )
                  : (
                    null
                  )
              }
            </ul>
          </nav>
        </header>

        <div className="main-content">
          {
            this.state.showSidebar
              ? (
                <ListSidebarContainer />
              )
              : (
                null
              )
          }

          <Route exact path={`/lists/${this.props.currentListId}`}
            component={ListShowContainer}
            />

          {
            this.props.currentListId ?
            (<Redirect to={`/lists/${this.props.currentListId}`} />) :
            (<Redirect to="/" />)
          }

        </div>

      </div>
    );
  }

  render() {

    return (
      <div>
        {
          this.props.currentUser
            ? (
              <div>
                {this.appPage()}
              </div>
            )
            : (
              <div>
                {this.sessionLinks()}
              </div>
            )
        }
      </div>
    );
  }
}
// <Route exact path={`/lists/${this.props.currentListId}`}
//   render={(routeProps) => (<ListShow {...routeProps} currentListId={this.props.currentListId}/>)}
//   />

export default Greeting;
