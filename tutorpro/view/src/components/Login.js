import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  loginClick = (e) => {
      e.preventDefault()
      console.log('the login button was clicked. Username is ' + this.state.email)
      console.log('the login button was clicked. Password is ' + this.state.password)

        axios.get(`http://localhost:8080/user/authenticateUser?email=${this.state.email}&password=${this.state.password}`)
          .then(res => {
             if(res.data) {
                alert("Logged in successfully!");
             } else {
                alert("Bad Username or password!");
             }
          })
      }

    render() {
        return (
            <form onSubmit={this.loginClick}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.onChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}
