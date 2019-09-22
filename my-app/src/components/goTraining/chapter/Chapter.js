import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './style.css';


class Chapter extends Component {


    render() {
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
                    <form id="ex-box">
                        <img src="http://pngimg.com/uploads/katana/katana_PNG45.png" alt="katana" />
                        <h3>Excersise 1</h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://repl.it/@Loliud/RomanNumerals">https://repl.it/@Loliud/RomanNumerals</a>
                        <textarea rows="4" cols="50" required placeholder=" Link ném vào đây ae "></textarea>
                        <Button type="submit" color="info">Submit</Button>
                    </form>
                    <form id="ex-box">
                        <img src="http://pngimg.com/uploads/katana/katana_PNG45.png" alt="katana" />
                        <h3>Excersise 2</h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://repl.it/@Loliud/median">https://repl.it/@Loliud/median</a>
                        <textarea rows="4" cols="50" required placeholder=" Link ném vào đây ae "></textarea>
                        <Button type="submit" color="info">Submit</Button>
                    </form>
                    <form id="ex-box">
                        <img src="http://pngimg.com/uploads/katana/katana_PNG45.png" alt="katana" />
                        <h3>Excersise 3</h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://repl.it/@Loliud/nonUniqueElements">https://repl.it/@Loliud/nonUniqueElements</a>
                        <textarea rows="4" cols="50" required placeholder=" Link ném vào đây ae "></textarea>
                        <Button type="submit" color="info">Submit</Button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default Chapter;