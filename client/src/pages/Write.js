import React, { useState } from 'react';
import Editor from '../components/EditorComponent';
import LanguageSelect from '../components/LanguageSelect';
import '../scss/Write.scss';

const Write = () => {
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  function onEditorChange(value) {
    setDesc(value);
  }
  const TitleChange = (e) => {
    setTitle(e.target.value);
  };

  const createPost = () => {
    console.log('title', typeof title);
    console.log('language', language);
    console.log(typeof desc);
  };

  return (
    <section className="writeContainer">
      <input
        className="titleInput"
        type="text"
        placeholder="제목을 입력하세요"
        onChange={TitleChange}
        value={title || ''}
      />
      <div className="writeLanguages">
        <h2>사용 언어 : </h2>
        <LanguageSelect setLanguage={setLanguage} />
      </div>
      <div className="writeEditor">
        <Editor value={desc || ''} onChange={onEditorChange} />
      </div>
      <div className="writBtn">
        <button>취소</button>
        <button onClick={createPost}>등록</button>
      </div>
    </section>
  );
};

export default Write;
