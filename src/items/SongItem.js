import React from 'react'

const SongItem = ({ hit: { artist, cover, name, url } }) => {
  return (
    <div className="song-item p2">
      <div className="h2">
        {name}
      </div>
    </div>
  );
};

export default SongItem
