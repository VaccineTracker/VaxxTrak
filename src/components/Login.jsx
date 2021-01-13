import React, { useState, useEffect } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault(); //keeps page from reloading
    //will eventually take this input and pass it to Vaccine search
    alert('looking good, feeling great: ' + this.state.value);
    this.setState({
      [evt.target.value]: '',
    });
  }

  render() {
    return (
      <div className="authOptions">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="email"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        <br></br>
        <div>
          <a className="googlebutton" href="/auth/google">
            Google+
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
