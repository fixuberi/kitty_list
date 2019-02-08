import React, { Component } from 'react';
import KittyForm from './KittyForm';
import data from './../stubbed_data';

class App extends Component {
  render() {
    return (
      <KittyForm items={data} />
    );
  }
}

export default App;
