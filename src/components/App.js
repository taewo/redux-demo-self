import React, { Component, PropTypes } from 'react';
import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux'
import * as actions from '../actions';

const propTypes = {
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  number: PropTypes.number,
};

const logUndefined = (funcName) => { console.log(`${funcName} undefined`); };

const defaultProps = {
  handleIncrement: () => logUndefined('handleIncrement'),
  handleDecrement: () => logUndefined('handleDecrement'),
  number: -1,
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Value
          number={this.props.number}
        />
        <Control
          addNum={this.props.handleIncrement}
          subNum={this.props.handleDecrement}
        />
      </div>
    );
  }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    number: state.calculate.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => { dispatch(actions.increment()); },
    handleDecrement: () => { dispatch(actions.decrement()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
