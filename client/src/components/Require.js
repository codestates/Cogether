import React from 'react';
import ReactStars from 'react-rating-stars-component';
import '../scss/Require.scss';

const Require = () => {
  return (
    <div className="RequireMain">
      <div className="RequireHeader">
        더 좋은 서비스를 위해 Cogether에게 평가를 남겨주세요!
      </div>
      <div>
        <ReactStars
          isHalf={true}
          count={5}
          //onChange={ratingChanged}
          size={70}
          activeColor="#870cec"
        />
      </div>
      <div className="RequireFooter">
        <textarea
          placeholder="여기에 평가를 남겨주세요"
          // ref={inputRef}
        />
        <button
        // onClick={onSubmit}
        >
          제출하기
        </button>
      </div>
    </div>
  );
};

export default Require;
