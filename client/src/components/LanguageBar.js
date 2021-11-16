import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStack, setIsValue } from '../actions';

const LanguageBar = () => {
  const dispatch = useDispatch();
  const Value = useSelector((state) => state.userReducer);
  const { isValue } = Value;

  useEffect(() => {
    dispatch(setIsValue(0));
  }, []);
  const test = (e) => {
    dispatch(setStack(e.target.value));
    dispatch(setIsValue(e.target.value));
  };

  return (
    <div className="languageContainer">
      <ul className="languageBar">
        <li
          className={isValue === 1 || isValue === 0 ? 'languageItem' : 'done'}
          value="1"
          onClick={test}
        >
          JavaScript
        </li>
        <li
          className={isValue === 2 || isValue === 0 ? 'languageItem' : 'done'}
          value="2"
          onClick={test}
        >
          TypeScript
        </li>
        <li
          className={isValue === 3 || isValue === 0 ? 'languageItem' : 'done'}
          value="3"
          onClick={test}
        >
          React
        </li>
        <li
          className={isValue === 4 || isValue === 0 ? 'languageItem' : 'done'}
          value="4"
          onClick={test}
        >
          NodeJS
        </li>
        <li
          className={isValue === 5 || isValue === 0 ? 'languageItem' : 'done'}
          value="5"
          onClick={test}
        >
          Python
        </li>
        <li
          className={isValue === 6 || isValue === 0 ? 'languageItem' : 'done'}
          value="6"
          onClick={test}
        >
          Django
        </li>
        <li
          className={isValue === 7 || isValue === 0 ? 'languageItem' : 'done'}
          value="7"
          onClick={test}
        >
          C
        </li>
        <li
          className={isValue === 8 || isValue === 0 ? 'languageItem' : 'done'}
          value="8"
          onClick={test}
        >
          Java
        </li>
        <li
          className={isValue === 9 || isValue === 0 ? 'languageItem' : 'done'}
          value="9"
          onClick={test}
        >
          MySQL
        </li>
      </ul>
    </div>
  );
};

export default LanguageBar;
