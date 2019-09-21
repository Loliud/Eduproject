import React, {Component} from 'react';
import Home from './components/home/home.js';
import './App.css';

class  App extends Component {
 render(){
   return (
     <div>
       <div id="menu">
         <div className="overlay">
         <h1>Coders.thoidai</h1>
         <ul id="list">
           <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png"/></span>Go training</li>
           <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png"/></span>Guide</li>
           <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png"/></span>Contact</li>
           {/* <li className="item"><span><img src="http://pngimg.com/uploads/katana/katana_PNG14.png"/></span>Contact</li> */}
           {/* <li className="item"><span><i className="fas fa-arrow-right"></i></span>Contact</li> */}
         </ul>
         </div>
       </div>
       <Home/>
     </div>
   )
 }
}

export default App;
