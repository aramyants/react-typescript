import React, { Component } from 'react'

type CounterProps = {
  message: string
}

type CounterState = {
  count: number
}

export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.handleClick}>Increment</button>
        <div>{this.props.message} {this.state.count}</div>
      </div>
    )
  }
}

export default Counter
