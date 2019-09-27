import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import './home.css';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { auth, profile } = this.props;
        const loginAndSignInButton = auth.uid ? <div id="avar"><h3>{profile.avar}</h3></div> : (<div id="auth">
        <Link className="wrap-button" to="/signin"><button color="primary" id="sign-in">Sign In<span><img src="http://pngimg.com/uploads/katana/katana_PNG17.png" alt="katana" /></span></button></Link>
        <Link className="wrap-button" to="/signup"><button color="warning" id="sign-up">Sign Up<span><img src="http://pngimg.com/uploads/katana/katana_PNG17.png" alt="katana" /></span></button></Link>
        </div>) ;
        console.log(auth);
        console.log(profile);
        return (
            <div id="home-wrap">
                <div id="menu">
                    <div className="overlay">
                        <h1>CoderS nihonGo</h1>
                        <ul id="list">
                            <Link id="link-wrap" to="/gotraining"><li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png" alt="sword" /></span>Go training</li> </Link>
                            <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png" alt="sword" /></span>Guide</li>
                            <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png" alt="sword" /></span>Contact</li>
                            {/* <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png"/></span>Contact</li> */}
                            {/* <li className="item"><span><i className="fas fa-arrow-right"></i></span>Contact</li> */}
                        </ul>
                    </div>

                </div>
                {loginAndSignInButton}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Home);

