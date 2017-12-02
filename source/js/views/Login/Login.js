import React, {Component} from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
        <div className="login-container container">
            <div className="panel-login row">
                <div className="col-4">
                    <h2>Login</h2>
                    <hr/>
                    <button className="btn btn-dark">
                        Login
                    </button>
                    <a href="href">
                        forgot your Password?
                    </a>
                    <a href="href" className="back">
                        - Back to main site
                    </a>
                </div>
            </div>
            <div className="outer row">
                <div className="no-account">
                  Don't have account?
                  <a href="href">
                    Sign up!
                  </a>
                </div>
            </div>
        </div>
);
  }
}

export default Login;
