import React, { Component } from 'react';

import GetMovie from './GetComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><GetMovie/></div>
      </div>
    );
  }
}

export default App;
