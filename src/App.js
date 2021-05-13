import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <p style={{ textAlign: 'center', fontSize: 40 }}>{this.state.count}</p>
          <button onClick={this.increment} style={{ fontSize: 20, marginRight: 10 }}>Increment</button>
          <button onClick={this.decrement}  style={{ fontSize: 20, marginRight: 10 }}>Decrement</button>
          <button onClick={this.reset}  style={{ fontSize: 20, marginRight: 10 }}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
