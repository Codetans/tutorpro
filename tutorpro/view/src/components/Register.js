import React, { Component } from "react";
import axios from 'axios';

export default class Register extends Component {
      state = {
        email: '',
        password: '',
        name: ''
      }

      onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    createUser = (e) => {
        e.preventDefault()
        console.log('post this name ' + this.state.name)
        console.log('post this email ' + this.state.email)
        console.log('post this name ' + this.state.password)
        axios.post(`http://localhost:8080/user/create?name=${this.state.name}&email=${this.state.email}&password=${this.state.password}`)
            .then(res => {
                console.log(res);
                if(res.data === "Saved") {
                    alert("User created successfully");
                }
            })
    }

    render() {
        return (
            <form onSubmit={this.createUser}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.onChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        );
    }
}