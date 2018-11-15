import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    // const returnMessage = this.props.formType === 'Log In' ? <h3>Been here before? Welcome back!</h3> : <br/> ;
    // let returnMessage;
    // if (this.props.formType === 'Log In') {
    //   returnMessage = <h3>Been here before? Welcome back!</h3>
    // } else {
    //   returnMessage = <br/>
    // }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">

            {this.props.message}

            <label>
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="login-input"
              />
            </label>

            <label>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(SessionForm);
