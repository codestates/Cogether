import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import { setConfirmModal } from '../actions';
import { useDispatch } from 'react-redux';
import '../scss/Require.scss';

const Require = () => {
  const [content, setContent] = useState('');
  const [rate, setRate] = useState('');
  const dispatch = useDispatch();

  const rateHandler = (e) => {
    setRate(e);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content && rate) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/evaluations`, {
          grade: rate,
          content,
        })
        .then((res) => {
          dispatch(setConfirmModal(true, '소중한 평가 감사합니다.'));
          console.log('평가 성공');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(setConfirmModal(true, '모든 항목은 필수입니다.'));
    }
  };

  return (
    <div className='RequireMain'>
      <div className='RequireHeader'>
        더 좋은 서비스를 위해 Cogether에게 평가를 남겨주세요!
      </div>
      <div>
        <ReactStars
          isHalf={true}
          count={5}
          onChange={rateHandler}
          size={70}
          activeColor='#870cec'
          value={rate}
        />
      </div>
      <div className='RequireFooter'>
        <textarea
          onChange={(e) => contentHandler(e)}
          placeholder='여기에 평가를 남겨주세요'
        />
        <button onClick={onSubmit}>제출 하기</button>
      </div>
    </div>
  );
};

export default Require;
