import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <div className="map"><MapContainer /></div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
