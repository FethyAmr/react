import './App.css';
import React from "react";
import Counter from "./components/Counter"
import "./components/counter.css"


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.decrementCount = this.decrementCount.bind(this)
    this.incrementCount = this.incrementCount.bind(this)

  }

  decrementCount() {
    const { count } = this.state
if ( count > 0 )
    this.setState({
      count: count - 1
    })

  }

  incrementCount() {
    const { count } = this.state
    if (count < 100)
    this.setState({
      count: count + 1
    })

  }

  render() {
    return (
      <div >
        <h1>Counter</h1>

        <Counter count={this.state.count} addFunction={this.incrementCount} removeFunction={this.decrementCount}></Counter>

      </div>
    );
  }
}

export default App;
