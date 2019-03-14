import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Trending from "./containers/Trending";

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
