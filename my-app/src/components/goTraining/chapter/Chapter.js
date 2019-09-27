import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import *as actions from '../../../actions/actions';
import './style.css';


class Chapter extends Component {
    constructor(props){
        super(props);
        this.state ={
            ex_1: '',
            ex_2: '',
            ex_3: ''
        }


    }
    componentDidMount(){
        this.props.getChapters();
    }

    onSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        let objectLinks = {
            number : this.props.match.params.id,
            ...this.state
        }
        const {auth, profile} = this.props;
        console.log(profile);
        let excersises = profile.excersises;
        if(excersises){
            excersises.push(objectLinks);
        }else{
            excersises = [];
            excersises.push(objectLinks)
        }
        
        this.props.submitForm(excersises, auth.uid, profile);
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
        const { chapters, match } = this.props;
        const { id } = match.params;
        let chapter = chapters.find((chapter) => {
            return chapter.id === id;
        });

        if(!chapter){
            chapter = [];
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

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);