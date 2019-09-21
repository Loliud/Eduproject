import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import './home.css';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div id="home-wrap">
            <div id="menu">
                <div className="overlay">
                    <h1>CoderS nihonGo</h1>
                    <ul id="list">
                        <Link id="link-wrap" to="/gotraining"><li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png" alt="sword"/></span>Go training</li> </Link>
                        <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png" alt="sword"/></span>Guide</li>
                        <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png" alt="sword"/></span>Contact</li>
                        {/* <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png"/></span>Contact</li> */}
                        {/* <li className="item"><span><i className="fas fa-arrow-right"></i></span>Contact</li> */}
                    </ul>
                </div>
              
            </div>
            <div id="water">
            <div class="animate drop"></div>
            <div class="animate wave"></div>
            </div>
            </div>
        )
    }
}


export default Home;

