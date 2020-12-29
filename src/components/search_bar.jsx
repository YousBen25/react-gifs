import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  handleUpdate = (event) => {
    this.setState({
      term: event.target.value,
    });
    this.props.search(event.target.value);
  }

  render () {
    return (
      <input
        value={this.state.term}
        type="text"
        className="from-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
