import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import Login from "./LoginPage.css";
import istlogo from "../assets/images/istlogo.png";
import { Link } from "react-router-dom";

 export default class LoginPage extends Component {
    state = {
        disabled: true,
    };

    handleChange = (e) => {
        if (e.target.value.length >= 2) {
            this.setState({
                disabled: false,
            });
        } else {
            this.setState({
                disabled: true,
            });
        }
    };

    render() {
        return (
            <div className="body">
                <div className="content">
                    <h2 className="title">Login Form</h2>
                    <form className="form-content">
                        <div className="img-container">
                            <img className="img-size" src={istlogo} alt="logo" />
                        </div>
                        <div className="form-content">
                            <label htmlFor="username">
                                <h4 className="font-size-15">Username</h4>
                            </label>
                            <input 
                                className="input"
                                type="text"
                                id="username"
                                placeholder="Enter Username"
                                required
                            />

                            <label htmlFor="password">
                                <h4 className="font-size-15">Password</h4>
                            </label>
                            <input
                            className="input"
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            onChange={this.handleChange}
                            required
                            />

                            <button className="btn-style" disabled={this.state.disabled}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    
    }   
}