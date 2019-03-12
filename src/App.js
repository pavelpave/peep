import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route} from 'react-router-dom'
import Heder from './ui/heder/heder.js';
import BodyVideo from './ui/sectionVideo/bodyV.js'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
    	    <div>

           	<Heder />
            <Route component={BodyVideo} path='/'/>
            {/* <BodyVideo  /> */}

          </div>
      </BrowserRouter>
    );
  }
}

export default App;
