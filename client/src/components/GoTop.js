import React from 'react';

function GoTop() {
  return (
    <i
      className='fas fa-chevron-circle-up fa-3x'
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    ></i>
  );
}

export default GoTop;
