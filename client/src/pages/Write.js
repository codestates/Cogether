import React, { useState } from 'react';
import Editor from '../components/EditorComponent';
import LanguageSelect from '../components/LanguageSelect';
import '../scss/Write.scss';

const Write = () => {
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  function onEditorChange(value) {
    setDesc(value);
  }
  const TitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <section className="writeContainer">
      <input
        className="titleInput"
        type="text"
        placeholder="제목을 입력하세요"
        onChange={TitleChange}
        value={title}
      />
      <div className="writeLanguages">
        <h2>사용 언어 : </h2>
        <LanguageSelect />
      </div>
      <div className="writeEditor">
        <Editor value={desc} onChange={onEditorChange} />
      </div>
      <div className="writBtn">
        <button>취소</button>
        <button>등록</button>
      </div>
    </section>
  );
};

export default Write;
