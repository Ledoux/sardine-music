import React from 'react'

const SongItem = ({ hit: { artist, cover, name, url } }) => {
  return (
    <div className="hit media mb1 p2">
      <div className="media-left">
        <div
          className="media-object"
          style={{ backgroundImage: `url(${cover})` }}
        />
      </div>
      <div className="media-body mb1">
        <h4 className="media-heading">
          {name}
        </h4>
      </div>
      <div className="sep" />
    </div>
  );
};

export default SongItem
