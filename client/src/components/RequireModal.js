import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRequireModal } from '../actions/index';
import Require from './Require';
import '../scss/Modal.scss';

const RequireModal = ({ isOpenRe }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setRequireModal(false));
  };

  return (
    <>
      {isOpenRe ? (
        <div className="RequireModal">
          <div className="ModalMain" onClick={closeModal} />
          <div className="ModalBox">
            <Require />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RequireModal;
