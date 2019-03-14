import React, { Component } from "react";
import { connect } from "react-redux";

class Trending extends Component {
  render() {
    const { trendingGifs = [] } = {};// this.props;
    return (
      <div className="card-columns">
        {trendingGifs.forEach(obj => {
          return (
            <div className="card" key={obj.id}>
              <img
                srs={`https://media.giphy.com/media/${obj.id}/giphy.gif`}
                alt="gif here"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trendingGifs: state.gifs.trendingGifs
  };
};

export default connect(mapStateToProps)(Trending);
