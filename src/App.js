import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      input1: 0,
      input2: 0,
      result: 0
    }
  }
  onAdd = () => {
    this.setState({result: this.state.input1 + this.state.input2});
  }
  onMultiply = () => {
    this.setState({result: this.state.input1 * this.state.input2});
  }
  onChangeInput1 = (e) => {
    let input1 = parseInt(e.target.value);
    input1 = isNaN(input1) ? 0 : input1; 
    this.setState({input1});
  }
  onChangeInput2 = (e) => {
    let input2 = parseInt(e.target.value);
    input2 = isNaN(input2) ? 0 : input2; 
    this.setState({input2});
  }
  render() {
    return (
      <div>
        <label>Input 1</label>
        <input type="text" value={this.state.input1} onChange={(e) => this.onChangeInput1(e, "input1")}/>
        <label>Input 2</label>
        <input type="text" value={this.state.input2} onChange={(e) => this.onChangeInput2(e, "input2")}/>
        <label>Results</label>
        <div>{this.state.result}</div>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onMultiply}>Multiply</button>
      </div>
    );
  }
}

export default App;
