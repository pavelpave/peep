import React, { Component } from 'react';

import './App.css';
import { BrowserRouter ,Route} from 'react-router-dom'
import Heder from './ui/heder/heder.js';
import BodyVideo from './ui/sectionVideo/bodyV.js'
import VideoStartPage from "./ui/sectionVideo/videoStartPage/videoStart";
import FooterComponent from './ui/footer/Footer'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
    	    <div>

           	<Heder />
            
            <Route component={BodyVideo} path='/home'/>
            <Route component={VideoStartPage} path='/videoStart' />
            <FooterComponent />

          </div>
      </BrowserRouter>
    );
  }
}

export default App;
