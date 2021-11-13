import React, { Component, useState} from "react";
import PropTypes from "prop-types";
import NavbarComp from "./NavbarComp";
import FooterComp from "./FooterComp";
import { BrowserRouter as Router, Switch, Route } from "react-route-dom";
import Home from "../pages/Home";
import Chart from "../pages/Chart";
import Data from "../pages/Data";
import Laporan from"../pages/Laporan";
import "../../App.css";
import Cards from "../pages/Cards";


export default class Beranda extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render () {
        return(
            <div className="page-container">
                <Router>
                    <NavbarComp />
                    <Switch>
                        <Router path="/" exact component={Cards} />
                        <Router path="/data" exact component={Data} />
                        <Router path="/Chart" exact component={Chart} />
                        <Router path="/laporan" exact component={Laporan}/>
                    </Switch>
                </Router>
                <FooterComp />
            </div>
        );
    }
}
