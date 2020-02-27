import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import auth from "../utils/auth";
import FriendForm from "./Friendsform";


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
        <button onClick={() => {
          auth.logout(() => {
            this.props.history.push('/home')
          })}}>logout</button>

        <h1>Welcome to your dashboard</h1>
        <div>
          {this.state.friends.map(friend => (
            <p key={friend.id}>Name: {friend.name} <br />
            Age: {friend.age} <br />
            Email: {friend.email}</p>
          ))}
          
        </div>
        <FriendForm />
      </div>
    );
  }
}
export default FriendsList;
