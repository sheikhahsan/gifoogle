import React, { Component } from "react";
import { connect } from "react-redux";
import CardColumns from "../components/CardColumns";

class Trending extends Component {
  render() {
    const { trendingGifs = [] } = this.props;
    return (
      <CardColumns gifs={trendingGifs}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    trendingGifs: state.gifs.trendingGifs
  };
};

export default connect(mapStateToProps)(Trending);
