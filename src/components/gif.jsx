import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render () {
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.gif?cid=ecf05e4765e3cb77ac45803c763b826aaabacc3563574e65&rid=200w.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
