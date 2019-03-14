import React, { Component } from "react";
import { connect } from "react-redux";
import * as Util from "../utils";

class Random extends Component {
  render() {
    const { randomGif = {} } = this.props;
    return (
      <div>
        <img
          src={Util.getFullUrl(randomGif.id)}
          width="100%"
          alt="gif here"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    randomGif: state.gifs.randomGif
  };
};

export default connect(mapStateToProps)(Random);
