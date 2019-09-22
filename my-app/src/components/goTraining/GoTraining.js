import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Badge, Button, Spinner } from 'reactstrap';
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
        axios.get('https://5d3029eb28465b00146aaca5.mockapi.io/api/chapterEdu').then(res =>{
            console.log(res.data);
            this.setState({
                arrayDocs: res.data
            })
        })
        asyncLoading().then(() =>{
            this.setState({
                loading: false
            })
        });
    }


    render() {
        const {loading} = this.state;
        if(loading){
            return (
                <div id="loading-train">
                <Spinner style={{ width: '8rem', height: '8rem', color:"aqua" }} />
                </div>
            )
        }
        const {arrayDocs} = this.state;
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

export default GoTraining;