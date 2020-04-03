import React from "react";
import "./styles.css";
class Login extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>LOGIN</h1>
            <div className="firstname">
              <label htmlFor="username">UserName</label>
              <input
                name="name"
                placeholder="Username"
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;


