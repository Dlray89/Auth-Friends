import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        window.localStorage.getItem("token", res.data.payload);
        this.props.history.push("./protected");
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <div>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
        <form onSubmit={this.login}>
          <label htmlFor="username" />
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
