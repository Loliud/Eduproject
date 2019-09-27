import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Badge, Button, Spinner } from 'reactstrap';
import {connect} from 'react-redux';
import *as actions from '../../actions/actions';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import './gotraining.css';





class GoTraining extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            arrayDocs: []
        }
    }
    arrayToNav = (array) => {
        return array.map((item, index) => {
            return (
                <a key={index} href={`#${item.name}`}><li >{item.name}</li></a>
            );
        });
    }
    arrayToBox = (array) => {
        return array.map((item, index) => {
            return ( 
                <div className="doc-box" id={item.name} key={index}>
                    <h3>{item.name}</h3>
                    {/* <p>{item.content}</p> */}
                    <Badge color="info">Keyword :</Badge>
                    <p>{item.keyword}</p>
                    <Badge color="success">Links :</Badge><br/>
                    {
                        item.links.map((link, index) =>{
                            return(
                                <div key={index} ><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></div>        
                            );
                        })
                    }
                    <br/>
                    <Link to={`/excersise/${item.id}`}><Button color="danger">Go excersise</Button></Link>
                    
                </div>
            )
        });
    }

    componentDidMount(){
        this.props.fetchChapters();
        asyncLoading().then(() =>{
            this.setState({
                loading: false
            })
        });
    }


    render() {
        const {loading} = this.state;
        const {arrayDocs, auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin"/>
        if(loading){
            return (
                <div id="loading-train">
                <Spinner style={{ width: '8rem', height: '8rem', color:"aqua" }} />
                </div>
            )
        }
        return (
            <div id="wrap-training">
                {/* <h1>CoderS nihonGo</h1> */}
                {/* <Col sm={4} id="navbar">
                        <ul id="list-item">
                            {this.arrayToNav(arrayDocs)}                       
                        </ul>
                </Col> */}
                <Row id="wrap-content">
                    {/* <Col sm={4} id="fake">
                        <h1>Ken</h1>
                    </Col> */}
                    <Col sm={12} id="content">
                        {this.arrayToBox(arrayDocs)}
                    </Col>
                </Row>
            </div>
        )
    }
}

var asyncLoading = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve();
        }, 500)
    });
}
const mapStateToProps = (state) =>{
    // console.log(state);
    return {
        arrayDocs: state.chapters,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch, props) =>{
        return {
            fetchChapters : () => dispatch(actions.fetchChapter())
        }
}

export default 
    compose(
        connect(mapStateToProps, mapDispatchToProps),
        firestoreConnect([
            {collection: 'appUsers'}
        ])
)(GoTraining);