import axios from 'axios';
import React, { useState } from 'react';
import Comment from '../components/Comment';
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
  const getFields = (input, field) => {
    let output = [];
    for (let i = 0; i < input.length; ++i) output.push(input[i][field]);
    return output;
  };

  let result = getFields(language, 'value');

  const createPost = () => {
    console.log('result', result);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          title: title,
          stacks: language,
          content: desc,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <div className="test">
        <Comment />
      </div>
      <div className="writBtn">
        <button>취소</button>
        <button onClick={createPost}>등록</button>
      </div>
    </section>
  );
};

export default Write;
