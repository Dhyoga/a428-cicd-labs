import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to My App!</h1>
          <h2>I am Dhyoga, this is my submission, so give me 5 stars! &#128544;</h2>
          <p className='Stars'>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      </div>
    );
  }
}

export default App;
