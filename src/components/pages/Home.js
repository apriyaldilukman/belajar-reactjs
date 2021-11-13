import React, {Component} from "react";
import axios from "axios";
import "./Cards.css";
import {Row, Col, Card } from "react-bootstrap";

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        axios.get("https://piscum.photo/v2/list").then((response) => {
            this.setState({
            posts: Response.data,
            });
        });
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="home">
            <h1>Home</h1>

            {posts.map((post) => (
             <div className="card text-center">
                <div className="overflow">
                    <img
                        src={post.download_url}
                        alt={post.author}
                        className="card-img-top"
                    />
                </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">Author : {post.author} </h4>
                    </div>
                </div>
                ))}
            </div>
        );
    }
}

export default Home;