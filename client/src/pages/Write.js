import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setConfirmModal, setQuarterModal } from '../actions';
import { useParams, useHistory } from 'react-router';
import Editor from '../components/EditorComponent';
import LanguageSelect from '../components/LanguageSelect';
import '../scss/Write.scss';

const Write = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState([]);

  //수정버튼 클릭시 사용되는 상태들
  const postId = useParams();
  const [detailId, setDetailId] = useState(postId);
  const [edit, setEdit] = useState(true);
  useEffect(() => {
    if (detailId.postId && edit) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      axios
        .get(`${process.env.REACT_APP_API_URL}/posts/${detailId.postId}`, {
          headers: {
            authorization: `Bearer ${localStorage.accessToken}` || null,
          },
        })
        .then((res) => {
          const data = res.data.data;
          // console.log('data', res.data.stacks);
          setTitle(data.title);
          setDesc(data.content);
          setLanguage(res.data.stacks);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function onEditorChange(value) {
    setDesc(value);
    setEdit(false);
  }
  const TitleChange = (e) => {
    setTitle(e.target.value);
    setEdit(false);
  };
  const getFields = (input, field) => {
    let output = [];
    for (let i = 0; i < input.length; ++i)
      output.push(parseInt(input[i][field]));
    return output;
  };

  let result = getFields(language, 'value');

  const createPost = () => {
    console.log(title);
    console.log('result', result.length);
    console.log(desc);
    if (title !== '' && desc !== '' && result.length !== 0) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/posts`,
          {
            title: title,
            stacks: result,
            content: desc,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.accessToken}`,
            },
          }
        )
        .then((res) => {
          dispatch(setConfirmModal(true, '등록 완료되었습니다'));
          console.log('등록완료');
          history.push('/');
        })
        .catch((err) => {
          dispatch(setConfirmModal(true, '등록 실패하였습니다'));
          console.log('등록실패');
        });
    } else {
      dispatch(setConfirmModal(true, '제목, 언어, 내용을 작성해 주세요.'));
    }
  };

  const editPost = () => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/posts/${detailId.postId}`,
        {
          title: title,
          stacks: result,
          content: desc,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.accessToken}`,
          },
        }
      )
      .then((res) => {
        dispatch(setConfirmModal(true, '게시물이 수정되었습니다.'));
        console.log('등록완료');
        history.push('/');
      })
      .catch((err) => {
        dispatch(setConfirmModal(true, '게시물 수정에 실패하였습니다.'));
        console.log('등록실패');
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
      <div className="writBtn">
        <button>취소</button>
        {detailId.postId ? (
          <button onClick={editPost}>저장</button>
        ) : (
          <button onClick={createPost}>등록</button>
        )}
      </div>
    </section>
  );
};

export default Write;
