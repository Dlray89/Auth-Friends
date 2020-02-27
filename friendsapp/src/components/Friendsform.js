import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class postForm extends Component {
constructor(props) {
    super(props)

    this.state = {
         id:'',
         name:'',
         age:'',
         email:''

    }
}
changeHandler = e => {
    this.setState({[e.target.name] : e.target.value })
}

submitHandler =e=> {
    e.preventDefault()
    console.log(this.state)
    axiosWithAuth()
    .post('api/friends', this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}


  render() {
      const { id, name, age, email } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input placeholder="Type of friend" type="text" name="id" value={id} onChange={this.changeHandler} />
          </div>
          <div>
            <input  placeholder="name" type="text" name="name" value={name} onChange={this.changeHandler}/>
          </div> 
          <div>
            <input  placeholder="age" type="text" name="age" value={age} onChange={this.changeHandler}/>
          </div>
          <div>
            <input  placeholder="email" type="email" name="email" value={email} onChange={this.changeHandler}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default postForm;