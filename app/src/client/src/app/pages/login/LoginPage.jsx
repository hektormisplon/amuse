import React, { Component } from 'react';
import SignUp from '../auth/SignUp';

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <h1>Sign in</h1>
        <form className={'sign-in-form'}>
          <label htmlFor="email">Email</label>
          <input type="email" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button type="submit">Sign In</button>
        </form> */}
        <SignUp />
      </React.Fragment>
    );
  }
}

export default LoginPage;
