import React from "react";

const CardColumns = props => {
  const { gifs = [] } = props;
  return (
    <div className="card-columns" style={{columnCount: 4}}>
      {gifs.map(obj => {
        return (
          <div
            className="card"
            key={obj.id}
            style={{ width: '270px', border: 'none'}}
          >
            <img
              src={`https://media.giphy.com/media/${obj.id}/giphy.gif`}
              width="270px"
              alt="gif"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardColumns;
