import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Trending from "./components/Trending";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Trending />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(App);
