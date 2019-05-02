import React from 'react';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <Welcome />
      </div>
    );
  }
}

export default App;
