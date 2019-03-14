import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import AppRouter from "./router";

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRouter />
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
