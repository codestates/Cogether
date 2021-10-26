import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Require = () => {
  return (
    <div className='Require'>
      <div>더 좋은 서비스를 위해 Cogether에게 평가를 남겨주세요!</div>
      <div> 코게더 로고</div>
      <ReactStars
        isHalf={true}
        count={5}
        //onChange={ratingChanged}
        size={70}
        activeColor='#870cec'
      />
    </div>
  );
};

export default Require;
