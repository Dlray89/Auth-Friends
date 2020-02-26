import react from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.grabData();
    }
    grabData = () => {
        const token = window.localStorage.getItem('token')

        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            console.log(res)
        })
        .catch( error => console.log(error))


    }
    render(){
        return(
            <div>
                {friends.map(friend => {
                    <div key={friend.id}>
                        <p>{friend.name}</p>
                    </div>
                })}
            </div>
        )
    }
}