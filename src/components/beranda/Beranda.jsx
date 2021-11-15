import React, { Component, useState} from "react";
import PropTypes from "prop-types";
import NavbarComp from "./NavbarComp";
import FooterComp from "./FooterComp";
import { Routes, Route, Router } from "react-router-dom";
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
        return (
            <div className="page-container">

                <Router>
                    <NavbarComp/>
                    <Routes>
                        <Route path="/" exact component={Cards} />
                        <Route path="/data" component={Data} />
                        <Route path="/laporan" component={Laporan} />
                        <Route path="/chart" component={Chart} />
                    </Routes>
                </Router>

                <FooterComp/>
            </div>

        );
    }
}
