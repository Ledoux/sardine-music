import React from 'react'

const SongItem = ({ hit: { artist, cover, name, url } }) => {
  return (
    <div className="hit media">
      <div className="media-left">
        <div
          className="media-object"
          style={{ backgroundImage: `url(${cover})` }}
        />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default SongItem
