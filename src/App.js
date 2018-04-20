import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import logo from './logo.svg';
import './App.css';
import MapContainer from './map';
import Header from './navbar';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        // <PersistGate persistor={persistor} loading={null}>
          <div className="App">
            <Header />
            <div className="map"><MapContainer /></div>
          </div>
        // </PersistGate>
      // </Provider>
    );
  }
}

export default App;
