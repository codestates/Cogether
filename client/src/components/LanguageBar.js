import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStack } from '../actions';

const LanguageBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const test = (e) => {
    setValue(e.target.value);
    dispatch(setStack(e.target.value));
  };

  return (
    <div className="languageContainer">
      <ul className="languageBar">
        <li
          className={value === 1 || value === 0 ? 'languageItem' : 'done'}
          value="1"
          onClick={test}
        >
          JavaScript
        </li>
        <li
          className={value === 2 || value === 0 ? 'languageItem' : 'done'}
          value="2"
          onClick={test}
        >
          TypeScript
        </li>
        <li
          className={value === 3 || value === 0 ? 'languageItem' : 'done'}
          value="3"
          onClick={test}
        >
          React
        </li>
        <li
          className={value === 4 || value === 0 ? 'languageItem' : 'done'}
          value="4"
          onClick={test}
        >
          NodeJS
        </li>
        <li
          className={value === 5 || value === 0 ? 'languageItem' : 'done'}
          value="5"
          onClick={test}
        >
          Python
        </li>
        <li
          className={value === 6 || value === 0 ? 'languageItem' : 'done'}
          value="6"
          onClick={test}
        >
          Django
        </li>
        <li
          className={value === 7 || value === 0 ? 'languageItem' : 'done'}
          value="7"
          onClick={test}
        >
          C
        </li>
        <li
          className={value === 8 || value === 0 ? 'languageItem' : 'done'}
          value="8"
          onClick={test}
        >
          Java
        </li>
        <li
          className={value === 9 || value === 0 ? 'languageItem' : 'done'}
          value="9"
          onClick={test}
        >
          MySQL
        </li>
      </ul>
      {/* {value === 1 ? <div className="balloon">1</div> : null}
      {value === 2 ? <div className="balloon2">2</div> : null}
      {value === 3 ? <div className="balloon3">3</div> : null}
      {value === 4 ? <div className="balloon4">4</div> : null}
      {value === 5 ? <div className="balloon5">5</div> : null}
      {value === 6 ? <div className="balloon6">6</div> : null}
      {value === 7 ? <div className="balloon7">7</div> : null}
      {value === 8 ? <div className="balloon8">8</div> : null}
      {value === 9 ? <div className="balloon9">9</div> : null} */}
    </div>
  );
};

export default LanguageBar;
