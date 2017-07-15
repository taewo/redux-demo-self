import React, { Component, PropTypes } from 'react';
import DataList from '../containers/Data-List';
import DashBoard from '../containers/DashBoard';
import { connect } from 'react-redux';
import * as actions from '../actions';

const propTypes = {
};

const defaultProps = {
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        App
        <DataList
          data={this.props.data}
          selectedValue={this.props.handleSelectedValue}
        />
        <DashBoard
          activeValue={this.props.activeValue}
        />
      </div>
    );
  }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    data: state.data,
    activeValue: state.activeValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedValue: (value) => { dispatch(actions.selectedValue(value)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
