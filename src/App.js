import React, { Component } from 'react';

import './App.css';
import { BrowserRouter ,Route} from 'react-router-dom'
import Heder from './ui/heder/heder.js';
import BodyVideo from './ui/sectionVideo/bodyV.js'
import VideoStartPage from "./ui/sectionVideo/videoStartPage/videoStart";
import FooterComponent from './ui/footer/Footer'
import state from "./state";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
    	    <div className='grid_page'>

          <Heder/>
          <Route component={() => <BodyVideo state={state} />} path='/home'/>
          <Route render={() => <VideoStartPage/>} path='/videoStart' />
          <FooterComponent />

          </div>
      </BrowserRouter>
    );
  }
}

export default App;
