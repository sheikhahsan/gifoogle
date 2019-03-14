import React from "react";
import * as Util from "../utils";

const CardColumns = props => {
  const { gifs = [] } = props;
  return (
    <div className="card-columns">
      {gifs.map(obj => {
        return (
          <div
            className="card"
            key={obj.id}
          >
            <img
              src={Util.getFullUrl(obj.id)}
              width="263px"
              alt="gif"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardColumns;
