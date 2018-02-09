import React, { Component } from 'react';
import Ports from './Ports';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/ports')
      .then(response => response.json())
      // .then(ports => this.setState( { ports }))
  }

  render() {
    return (
      <div className="App">
        <Ports />
      </div>
    );
  }
}

export default App;