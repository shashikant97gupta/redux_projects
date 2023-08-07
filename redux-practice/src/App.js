import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { startAction } from "./actions/startAction";
import { stopAction, yuHi } from "./actions/stopAction";
import rotateAction from "./actions/rotateAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
  appwa:() => dispatch({type: 'hatt', payload: "Hi we are not good!!@@"}),
  rotateAction: (payload) => dispatch(rotateAction(payload)),
  yuhi:(params, payload) => dispatch(yuHi(params, payload)), 
});

class App extends Component {
  render() {
    console.log("***************", this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            className={
              "App-logo" +
              (this.props.rotating ? "" : " App-logo-paused")
            }
            alt="logo"
            onClick={() => this.props.rotateAction(!this.props.rotating)}
          />
          <h2 onClick={() => this.props.yuhi(false, "We  2nd one are not good close it!!@@@")}>{this.props.heading || 'Welcome'}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
