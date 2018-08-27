import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: 'Hello World',
      condition: true,
      logo
    };
    this.updateState = this.updateState.bind(this);
  }
  //call function 2nd method onclick: this.function
  //() => this.updateState()
  //()=>this.function.bind(this,params...)
  updateState(){
    this.setState({
      text: this.state.condition ? 'Hello Pakistan' : 'Hello World',
      condition: !this.state.condition,
      logo: this.state.condition ? '' : logo,
      abc: {
        a: '...'
      }
    })
    console.log(this);
  }
  
  renderHeader(){
    return(
      <header className="App-header">
          <img src={this.state.logo} className="App-logo" alt="React" />
          <h1 className="App-title">{this.state.text}{this.state.abc && this.state.abc.a}</h1>
          <input type='button' onClick={this.updateState} value='Click'/>
      </header>
      )
  }
  renderBody(){
    return  <div>
              <h1>onClick={'{this.myFunc}'}</h1>
              <p>
                This type of calling function is an assignment of function to an event. It doesn't keep function
                "this" in function. It keeps event "this" in it. This is not a disadvantage. It's all about requirement.
                If you want "this" of an event you can use this type of function call. 
              </p>
              <h1>onClick={'{() => this.myFunc()'}}</h1>
              <p>
                This is an arrow function call. It keeps function "this" in it. If you want to use function this you
                can use arrow function call. This is a simple calling notation instead of binding "this" to function.
              </p>
              <h1>onClick={'{this.myFunc.bind(this)}'}}</h1>
              <p>
                This is also a notation of calling function with it's own "this" not an event "this". You can call function
                with this notation also in ES6.
              </p>
            </div>
  }
  render() {
    return(
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
      </div>
      )
  }
}

export default App;
