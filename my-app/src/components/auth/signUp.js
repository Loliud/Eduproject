import React, {Component} from 'react';
import { FormGroup, Label, Input, Form, Spinner } from 'reactstrap';
import './style.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import *as actions from '../../actions/actions';



class SignUp extends Component{
    constructor(props){
        super(props);
        this.state ={
            loading: true,
            email: '',
            password: '',
            name: '',
        }
    }
    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
      }

    onSubmit = (event) =>{
        event.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        };
        this.props.goSignUp(newUser);
    }
    onChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }


    render(){
        const {email, name} = this.state;
        const { loading } = this.state;
        const {auth} = this.props;
        if(auth.uid) return <Redirect to="/"/>

        
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return <div className="loading"><Spinner style={{ width: '8rem', height: '8rem', color:"tomato" }} /></div>; // render null when app is not ready
        }
      
        return (
            <div id="wrap-auth">
            <div id="overlay">
            <Form id="box-form" onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" value={email} onChange={this.onChange} required/>
                </FormGroup>        
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" onChange={this.onChange} required/>
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={name} onChange={this.onChange} required/>
                </FormGroup>
                <button  color="danger">SIGN UP</button>
            </Form>
            </div>
        </div>
        )
    }
}
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
  }


const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        goSignUp: (newUser) =>{
            dispatch(actions.signUp(newUser))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);