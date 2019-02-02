import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import BouwBlokInstellingen from './BouwBlokInstellingen';

class App extends Component {
  constructor() {
    super();
    this.game = new Game(this);


    this.state = {selectedBlok: null};
    window.globalGame = this.game;
  }
  setSelectedBlok(blok) {
    this.setState({selectedBlok: blok});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BouwBlokInstellingen selected={this.state.selectedBlok}/>
          <p>
            Call "<code>globalGame.select(0-5);</code>" to select.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
