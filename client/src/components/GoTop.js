import React, { useState, useEffect } from 'react';

function GoTop() {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {scrollPosition === 0 ? null : scrollPosition > 980 ? (
        <i
          className="fas fa-chevron-circle-up fa-3x topScroll"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        ></i>
      ) : (
        <i
          className="fas fa-chevron-circle-up fa-3x"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        ></i>
      )}
    </>
  );
}

export default GoTop;
