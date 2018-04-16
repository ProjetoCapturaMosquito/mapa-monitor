import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './map';
import Header from './navbar';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <div className="map"><MapContainer /></div>
      </div>
    );
  }
}

export default App;
