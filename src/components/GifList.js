import React from 'react';

function GifList({ gifs }){
  const gifItems = gifs.map((gif) => {
    
    return (
      <li key={gif.id}>
        <img src={gif.images.original.url} alt={gif.title} />
        <p>{gif.title}</p>
      </li>
    );
  });

  return (
    <ul>
      {gifItems}
    </ul>
  );
};

export default GifList;