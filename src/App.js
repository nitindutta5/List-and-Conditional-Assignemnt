import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationCompoenent'
import CharComponent from './CharComponent'

class App extends Component {
  state = {
    arrayLength: 0,
    Array: []
  }
  changeHandler = (e) => {
    const myArray = e.target.value.split(' ');
    const myarrayLength = myArray.length;
    this.setState({
      arrayLength: myarrayLength,
      Array: myArray
    })
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} />
        <p>{this.state.arrayLength}</p>
        <ValidationComponent props={this.state.arrayLength} />

        { this.state.Array.map((obj, key) => <CharComponent props={obj} id={key} />)}

      </div>
    );
  }
}

export default App;
