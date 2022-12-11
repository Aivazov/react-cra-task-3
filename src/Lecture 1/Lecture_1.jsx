import React from 'react';

function Lecture_1({state, method}) {
  return (
    <div>
      <p></p>
      <button type="button" onClick={method}>
        {state.element}
      </button>
    </div>
  );
}

export default Lecture_1;
