import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    value : 'this will update when you click some shit.'
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.value}</h1>
        <button onClick={ ()=> fetch('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(respone => console.log('finished'))}>CLICK THE BUTTON</button>
      </div>
    );
  }
}

export default App;
