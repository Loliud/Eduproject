import React, { Component } from 'react';
import {Spinner} from 'reactstrap';
import './gotraining.css';
class GoTraining extends Component {
    constructor(props){
        super(props);
        this.state ={
            loading: true
        }
    }

    // componentDidMount(){
    //     asyncLoading().then(() =>{
    //         this.setState({
    //             loading: false
    //         })
    //     });
    // }


    render() {
        // const {loading} = this.state;
        // if(loading){
        //     return (
        //         <div id="loading-train">
        //         <Spinner style={{ width: '8rem', height: '8rem', color:"aqua" }} />
        //         </div>
        //     )
        // }
        return (
            <div id="wrap-training">
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
                        <form id="ex-box">
                            <img src="http://pngimg.com/uploads/katana/katana_PNG45.png" alt="katana"/>
                            <h3>Excersise 1</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://repl.it/@Loliud/RomanNumerals">https://repl.it/@Loliud/RomanNumerals</a>
                            <textarea rows="4" cols="50" required placeholder=" Link ném vào đây ae "></textarea>
                            <buttn type="submit">Submit</buttn>
                        </form>
                        <form id="ex-box">
                            <img src="http://pngimg.com/uploads/katana/katana_PNG45.png" alt="katana"/>
                            <h3>Excersise 2</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://repl.it/@Loliud/median">https://repl.it/@Loliud/median</a>
                            <textarea rows="4" cols="50" required placeholder=" Link ném vào đây ae "></textarea>
                            <buttn type="submit">Submit</buttn>
                        </form>
                        <form id="ex-box">
                            <img src="http://pngimg.com/uploads/katana/katana_PNG45.png" alt="katana"/>
                            <h3>Excersise 3</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://repl.it/@Loliud/nonUniqueElements">https://repl.it/@Loliud/nonUniqueElements</a>                          
                            <textarea rows="4" cols="50" required placeholder=" Link ném vào đây ae "></textarea>
                            <buttn type="submit">Submit</buttn>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// var asyncLoading = () =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve();
//         }, 2500)
//     });
// }

export default GoTraining;