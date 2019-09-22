import React, { Component } from 'react';
import { FormGroup, Label, Input, Form, Spinner } from 'reactstrap';
import './style.css';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
      }


    render() {
        const { loading } = this.state;
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return <div className="loading"><Spinner style={{ width: '8rem', height: '8rem', color:"tomato" }} /></div>; // render null when app is not ready
        }
      
        return (
        <div id="wrap-auth">
            <div id="overlay">
            <Form id="box-form">
                <FormGroup>
                    <Label for="Gmail">Gmail</Label>
                    <Input type="text" name="gmal" id="Gmail"  required/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" required/>
                </FormGroup>
                <button  color="danger">LOGIN</button>
            </Form>
            </div>
        </div>
          
        )
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  }

export default SignIn;