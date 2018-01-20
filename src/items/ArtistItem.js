import React from 'react'

const ArtistItem = ({ hit: { name } }) => {
  return (
    <div className="mb1 p2">
      {name}
    </div>
  );
};

export default ArtistItem
