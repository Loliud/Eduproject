import React, { Component } from 'react';
import './home.css';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
            <div id="menu">
                <div className="overlay">
                    <h1>CoderS nihonGo</h1>
                    <ul id="list">
                        <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png" alt="sword"/></span>Go training</li>
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

