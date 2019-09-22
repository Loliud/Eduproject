import React, {Component} from 'react';
import { FormGroup, Label, Input, Form, Spinner } from 'reactstrap';
import './style.css';



class SignUp extends Component{
    constructor(props){
        super(props);
        this.state ={
            loading: true
        }
    }
    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
      }


    render(){
        const { loading } = this.state;
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return <div className="loading"><Spinner style={{ width: '8rem', height: '8rem', color:"tomato" }} /></div>; // render null when app is not ready
        }
      
        return (
            <div id="wrap-auth">
            <div id="overlay">
            <Form id="box-form">
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email"  required/>
                </FormGroup>        
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="Username">First name</Label>
                    <Input type="text" name="userName" id="Username"  required/>
                </FormGroup>
                <FormGroup>
                    <Label for="Username">Last name</Label>
                    <Input type="text" name="userName" id="Username"  required/>
                </FormGroup>
                <button  color="danger">SIGN UP</button>
            </Form>
            </div>
        </div>
        )
    }
}
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

export default SignUp;