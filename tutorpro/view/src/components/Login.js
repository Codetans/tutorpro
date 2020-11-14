import React, { Component } from 'react';


const Login = (props) => {
    return (
        <form onSubmit={this.loginClick}>
            <div className="form-group">
                <br />
                <label>Email address</label>
                <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.onChange} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.onChange} />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
    )
}

export default Login
