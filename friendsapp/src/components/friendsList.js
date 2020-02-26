import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const token = window.localStorage.getItem("token");
    console.log(token)
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(error => console.log(error))
  }




  render() {
    return (
      <div>
        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>logout</button>

        <h1>Welcome to your dashboard</h1>
        <div>
          {this.state.friends.map(friend => (
            <p key={friend.id}>Name: {friend.name} <br />
            Age: {friend.age} <br />
            Email: {friend.email}</p>
          ))}
        </div>
      </div>
    );
  }
}
export default FriendsList;
