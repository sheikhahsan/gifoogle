import React, { Component } from "react";
import { connect } from "react-redux";

class Random extends Component {
  render() {
    const { randomGif = {} } = this.props;
    return (
      <div>
        <img
          src={`https://media.giphy.com/media/${randomGif.id}/giphy.gif`}
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
