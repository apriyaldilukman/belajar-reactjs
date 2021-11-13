import { makeStyles } from "@material-ui/core";
import React from "react";
import "../index.css";

const styles = makeStyles(() => ({
    input: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0px",
        display: "inline-block",
        border: "1px solid #ccc",
        boxSizing: "border-box", 
    },
}));

function Input() {
    const classes = styles ();
    return(
        <div>
            <label htmlFor="username">
                <h4 className="font-size-15">Username</h4>
            </label>
            <input 
            className={classes.input}
            type="text"
            id="username"
            placeholder="Enter Username"
            required
            />
            <label htmlFor="password">
                <h4 className="font-size-15">Password</h4>
            </label>
            <input 
            className={classes.input}
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            />
        </div>
    );
}

export default Input;