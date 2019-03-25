import React, { Component } from 'react';

import './App.css';
import { BrowserRouter ,Route} from 'react-router-dom'
import Heder from './ui/heder/heder.js';
import BodyVideo from './ui/sectionVideo/bodyV.js'
import VideoStartPage from "./ui/sectionVideo/videoStartPage/videoStart";
import FooterComponent from './ui/footer/Footer'
import SignInSignUpForm from "./ui/signup_signin/SignUp_signInForm"
import state from "./state";
import './index.css'
import massAjax from './ajax'
import inlocalStorag from './localStorag/workinLocalStorag'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
    	    <div className='grid_page'>

          <Heder inlocalStorag={inlocalStorag}/>
             <Route component={() => <BodyVideo state={state} massAjax={massAjax} />} path='/home'/>
             <Route render={() => <VideoStartPage/>} path='/videoStart' />
             <Route render={()=> <SignInSignUpForm  state={state}/>} path="/signInUp/" />
          <FooterComponent />

          </div>
      </BrowserRouter>
    );
  }
}

export default App;
