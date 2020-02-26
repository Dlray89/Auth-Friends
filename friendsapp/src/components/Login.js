import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
class Login extends React.Component {
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
        window.localStorage.setItem("token", res.data.payload);
        
        this.props.history.push("./protected");
      })
      .catch(error => console.log(error));
  };


  render() {
    return (
      <div>
        <div>
          <button>
            <Link to="/home">Home</Link>
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
        <form onSubmit={this.login}>
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
          <button
          >Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
