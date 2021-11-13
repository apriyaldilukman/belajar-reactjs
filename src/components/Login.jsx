import { makeStyles } from "@material-ui/core";
import React from "react";
import '../index.css';
import istlogo from "../assets/images/istlogo.png";
import Input from "./Input";
import Button from "./Button";

const styles = makeStyles(() => ({
    body:{
        display: "table",
        height: "100%",
        margin: "0 auto",
    },

    content: {
        display: "table-cell",
        verticalAlign: "middle"
    },
    
    formContent:{
        width: "95%",
        padding: "10px 8px",
    },

    form:{
        border: "3px solid #231e20",
        width: "350px"
    },

    imgContainer:{
        textAlign: "center",
        margin: "24px 0px 12px 0px"
    },

    imgSize:{
        width: "40%",
    },

    title:{
        fontSize: "24px",
        color: "#333333",
        fontWeight: "400",
        lineHeight: "30px",
        textAlign: "left",
        paddingLeft: "0.5em",
        marginBottom: "0.3em",
        marginTop: "30px !important",
        fontFamily: "OpenSansBold"
    },
}))

function Login() {
    const classes = styles();

    return(
        <div className={classes.body}>
            <div className={classes.content}>
                <h2 className={classes.title}>Login Form</h2>
                <form className={classes.form}>
                    <div className={classes.imgContainer}>
                        <img className={classes.imgSize} src={istlogo} alt="logo"/>
                    </div>
                    <div className={classes.formContent}>
                        <Ipunt />
                        <Button />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;