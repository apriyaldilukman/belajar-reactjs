import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./Home";

export default class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}