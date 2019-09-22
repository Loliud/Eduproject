import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Badge, Button, Spinner } from 'reactstrap';
import {connect} from 'react-redux';
import *as actions from '../../actions/actions';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import axios from 'axios';
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
                    <Link to="/excersise"><Button color="danger">Go excersise</Button></Link>
                    
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
        const {arrayDocs} = this.props;
        if(loading){
            return (
                <div id="loading-train">
                <Spinner style={{ width: '8rem', height: '8rem', color:"aqua" }} />
                </div>
            )
        }
        return (
            <div id="wrap-training">
                <Link to="/"><button id="go-back-home">Go back</button></Link>
                <h1>CoderS nihonGo</h1>
                <Row id="wrap-content">
                    <Col sm={4}>
                        <h1>JS Documentation</h1>
                        <ul id="list-item">
                            {this.arrayToNav(arrayDocs)}
                            
                        </ul>
                    </Col>
                    <Col sm={8}>
                        <h1>Reference word</h1>
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
    console.log(state);
    return {
        arrayDocs: state.chapters
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