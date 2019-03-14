import React, { Component } from "react";
import { connect } from "react-redux";
import * as Util from "../utils";
import { getRandomGif } from "../_store/actions";

class Random extends Component {
  componentDidMount() {
    this.props.getRandom();
  }

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

const mapDispatchToProps = dispatch => {
  return {
    getRandom: query => dispatch(getRandomGif())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
