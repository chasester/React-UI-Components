import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'

class App extends React.Component {

  constructor(props)
  {
    super(props)
    this.state =
    {
      answer : null,
      number : null
    };
    this.stored = null;
    this.operator = null;
  }
  handleEvent = buttonInput => {
    this.setState(this.calculate(this.state, buttonInput));
  };
  render()
  {
  return (
    <div className="container">
        <Display number={this.state.answer || this.state.number || "0"}/>
        
        <ActionButton text="clear" name="clear" callback={this.handleEvent} /> 
        <ActionButton text="/" name="div" callback={this.handleEvent} />
       
        <ActionButton text="7" name="7" callback={this.handleEvent} />
        <ActionButton text="8" name="8" callback={this.handleEvent} />
        <ActionButton text="9" name="9" callback={this.handleEvent} />
        <ActionButton text="x" name="mul" callback={this.handleEvent} />
        
        <ActionButton text="4" name="4" callback={this.handleEvent} />
        <ActionButton text="5" name="5" callback={this.handleEvent} />
        <ActionButton text="6" name="6" callback={this.handleEvent} />
        <ActionButton text="-" name="sub" callback={this.handleEvent} />
        
        <ActionButton text="1" name="1" callback={this.handleEvent} />
        <ActionButton text="2" name="2" callback={this.handleEvent} />
        <ActionButton text="3" name="3" callback={this.handleEvent} />
        <ActionButton text="+" name="add" callback={this.handleEvent} />
       
       
        <ActionButton text="0" name="0" callback={this.handleEvent} />
        <ActionButton text="=" name="equal" callback={this.handleEvent} />
      </div>
    );
  }
  clear()
  {
    console.log(`stored: ${this.stored}`);
    return {answer : null, number : null};
  }
  calculate(state, input)
  {
    if(input==="clear") return this.clear();
    if(state.number && state.number.split("").length > 7) return state; //make sure we say in the max length
    if(!isNaN(input))return {answer: null, number: (state.number ? state.number : "") + input};
    var answer = 0;
    if(!this.stored){ this.stored = this.state.answer || this.state.number || null; this.operator = input; return this.clear(); }
    switch(this.operator)
    {
      case "x":
        answer = parseInt(parseInt(this.stored) * parseInt(this.state.number))
        break;
      case "/":
        answer = parseInt(parseInt(this.stored) / parseInt(this.state.number))
        break;
      case "+":
        answer = parseInt(parseInt(this.stored) + parseInt(this.state.number))
        break;
      case "-":
        answer = parseInt(parseInt(this.stored) - parseInt(this.state.number))
        break;
      default:   
      break;
    }
    this.stored = input !== "=" ? answer : null;
    this.operator = input !== "=" ? input : null;
    console.log(`ans: ${answer}`);
    this.clear();
    return {number: null, answer : answer}
  }
}
export default App;
