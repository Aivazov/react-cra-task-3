import React from 'react';

function Lecture_1({ state, method }) {
  return (
    <div>
      <p>Hello there</p>
      <button type="button" onClick={method}>
        {state.name}
      </button>
    </div>
  );
}

export default Lecture_1;
