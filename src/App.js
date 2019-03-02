import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heder from './ui/heder/heder.js';
import BodyVideo from './ui/sectionVideo/bodyV.js'
class App extends Component {

  render() {
    return (
    	<div>
    	
       	<Heder />
        <BodyVideo state={this.state} />
        </div>
    );
  }
}

export default App;
