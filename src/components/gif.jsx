import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  // handleClick = () => {                        WITHOUT DESTRUCTURING RECEIVE ESLINGT ERROR
  //   if (this.props.selectGif) {
  //     this.props.selectGif(this.props.id);
  //   }
  // }

  handleClick = () => {
    const { selectGif, id } = this.props; // this is destructuring
    if (selectGif) {
      selectGif(id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id; // should return boolean
  }

  render () {
    // if (!this.props.id) {        WITHOUT DESTRUCTURING RECEIVE ESLINGT ERROR
    //   return null;
    // }
    const { id } = this.props; // this is destructuring
    if (!id) {
      return null;
    }
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.gif?cid=ecf05e4765e3cb77ac45803c763b826aaabacc3563574e65&rid=200w.gif`;
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <img
        src={src}
        alt=""
        className="gif"
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
      />
    );
  }
}

export default Gif;
