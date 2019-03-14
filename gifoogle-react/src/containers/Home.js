import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import CardColumns from "../components/CardColumns";

class Home extends Component {
  render() {
    const { searchGifs = [] } = this.props;
    return (
      <div>
        <SearchBar />
        <CardColumns gifs={searchGifs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchGifs: state.gifs.searchGifs
  };
};

export default connect(mapStateToProps)(Home);
