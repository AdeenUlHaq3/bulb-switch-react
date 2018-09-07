import React, { Component } from 'react';
import './App.css';
import OffBulb from './screens/OffBulb/OffBulb';
import OnBulb from './screens/OnBulb/OnBulb';
import BrokenBulb from './screens/BrokenBulb/BrokenBulb';
import BreakBulbButton from './screens/BreakBulbButton/BreakBulbButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      btnSwitch : false,
      broke: false
    }
    this.toggleButton = this.toggleButton.bind(this);
    this.breakBulb = this.breakBulb.bind(this);
  } 
  toggleButton() {
    const { btnSwitch } = this.state;
    this.setState({ btnSwitch: !btnSwitch })
  }
  breakBulb() {
    this.setState({ broke: true })
  }
  render() {
    const { btnSwitch, broke } = this.state;
    return (
      <div className="App">
        <BreakBulbButton breakBulb={this.breakBulb}/>
        {!broke && !btnSwitch && <OffBulb toggle={this.toggleButton}/>}
        {!broke && btnSwitch && <OnBulb toggle={this.toggleButton}/>}
        {broke && <BrokenBulb />}
      </div>
    );
  }
}

export default App;
