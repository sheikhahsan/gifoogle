import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import Trending from "./components/Trending";

class App extends Component {
  render() {
    return (
      <div className="App container">
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
