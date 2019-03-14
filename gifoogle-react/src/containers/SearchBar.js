import React, { Component } from "react";
import { connect } from "react-redux";
import { getGifsByQuery } from "../_store/actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  onSearch = event => {
    event.preventDefault();
    this.props.getGifs(this.state.query);
  };

  onQueryChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.onSearch} className="search-form">
        <h5>Search all GIPHY GIFs</h5>
        <div className="form-group">
          <input
            className="form-control"
            value={query}
            onChange={this.onQueryChange}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getGifs: query => dispatch(getGifsByQuery(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
