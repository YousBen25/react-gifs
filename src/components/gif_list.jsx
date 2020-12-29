import React from 'react';
import Gif from './gif';
// eslint-disable-next-line react/prefer-stateless-function
// without destructuring
// const GifList = (props) => {
//   return (
//     <div className="gif-list">
//       {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
//     </div>
//   );
// };

// Using destructuring
const GifList = ({ gifs, selectGif }) => { // this is destructuring
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
  );
};
export default GifList;
