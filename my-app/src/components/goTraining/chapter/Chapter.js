import React, { Component } from 'react';
import { Button, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import *as actions from '../../../actions/actions';
import {Redirect} from 'react-router-dom';
import './style.css';


class Chapter extends Component {
    constructor(props){
        super(props);
        this.state ={
            loading: false,
            ex_1: '',
            ex_2: '',
            ex_3: ''
        }


    }
    componentDidMount(){
        this.props.getChapters();
        let { id } = this.props.match.params;
        var currentEx;
        if(id && this.props.profile.excersises){
            currentEx = this.props.profile.excersises[id - 1];
        }
        this.setState({
            ...currentEx
        });
    }

    onSubmit = (event) =>{
        event.preventDefault();
        let objectLinks = {
            number : this.props.match.params.id,
            ...this.state
        }
        const {auth, profile} = this.props;
        let excersises = profile.excersises;
        console.log(excersises);

        if(excersises && excersises.length < 1){
            excersises.push(objectLinks);
        }else{
           
                var key = true;
                for(let i = 0; i < excersises.length; i++){
                    if(excersises[i].number === objectLinks.number){
                        excersises[i] = objectLinks;
                        key = false;
                        break;
                    }
                }
                if(key){
                    excersises.push(objectLinks);
                }
           
           
        }




        this.props.submitForm(excersises, auth.uid, profile);

        // loading status
        this.setState({
            loading: true
        });
        // ngung loading
        ayncLoading().then(res =>{
            this.setState({
                loading: false
            });
        });
    }
    onChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        });
      
    }
    formRender = (array) => {
        if(array){
            return array.map((item, index) => {
                return (
                    <form onSubmit={this.onSubmit} key={index} id="ex-box">
                        <img src="http://pngimg.com/uploads/katana/katana_PNG45.png" alt="katana" />
                        <h3>Excersise {index + 1}</h3>
                        <a target="_blank" rel="noopener noreferrer" href={item}>{item}</a>
                        <textarea name={`ex_${index + 1}`} value={this.state[`ex_${index + 1}`]} rows="4" cols="50" required placeholder=" Link ném vào đây ae " onChange={this.onChange} required></textarea>
                        <Button type="submit" color="info">Submit</Button>
                    </form>
                )                                                                                                                                                                                   
            });
        }
       
    }
    

    render() {
        const { chapters, match,auth } = this.props;
        const {loading} = this.state;
        const { id } = match.params;
        let chapter = chapters.find((chapter) => {
            return chapter.id === id;
        });
        if(!auth.uid){
            return  <Redirect to="/"/>
        }
        if(!chapter){
            chapter = [];
        }
        if(loading){
            return (
                <div id="loading-train">
                    <h1>Lưu thành công</h1>
                <Spinner style={{ width: '8rem', height: '8rem', color:"aqua" }} />
                </div>
            )
        }
        return (
            <div id="chapter">
                <div>
                    <h1>Excersises daily</h1>

                </div>
                <div id="form">
                    {/* <div id="go-name">
                <label>Name</label><input type="text" required />
                <div id="warning-name">
                    <p>Hiện tại chưa có chức năng đăng nhập. Ae điền đúng tên của mình, điền sai coi như chưa nộp bài :))</p>
                </div>
            </div> */}
                    <div id="list-excersises">
                       {this.formRender(chapter.excersises)}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chapters: state.chapters,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        getChapters: () => dispatch(actions.fetchChapter()),
        submitForm: (objectLinks, key, profile) => dispatch(actions.submitForm(objectLinks, key, profile))
    }
}

const ayncLoading = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve();
        }, 800);
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);