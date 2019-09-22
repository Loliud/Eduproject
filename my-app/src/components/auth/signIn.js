import React, { Component } from 'react';
import { FormGroup, Label, Input, Form, Spinner } from 'reactstrap';
import './style.css';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    onSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }
    onChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        const { loading, email } = this.state;
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return <div className="loading"><Spinner style={{ width: '8rem', height: '8rem', color:"tomato" }} /></div>; // render null when app is not ready
        }
      
        return (
        <div id="wrap-auth">
            <div id="overlay">
            <Form id="box-form" onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="Gmail">Gmail</Label>
                    <Input type="text" name="email" id="Gmail" value={email} onChange={this.onChange} required/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" onChange={this.onChange} required/>
                </FormGroup>
                <button  color="danger">LOGIN</button>
            </Form>
            </div>
        </div>
          
        )
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
  }

export default SignIn;