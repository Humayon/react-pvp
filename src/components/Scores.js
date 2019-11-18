import React from 'react';

let Scores = props => {
  return (
    <div className="col-md-6 text-center my-3">
      <p className="rounded-circle mx-auto count">{props.score}</p>
    </div>
  );
};

export default Scores;
