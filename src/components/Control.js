import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addNum}>+</button>
        <button onClick={this.props.subNum}>-</button>
      </div>
    );
  }
}

export default Control;
