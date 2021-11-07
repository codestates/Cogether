// import axios from 'axios';
// import React, { useState } from 'react';
// import { useParams } from 'react-router';
// // import { useDispatch } from 'react-redux';
// // import { setConfirmModal } from '../actions';
// // import { useHistory } from 'react-router';
// import Editor from '../components/EditorComponent';
// import LanguageSelect from '../components/LanguageSelect';
// import '../scss/Write.scss';

// const Edit = () => {
//   const postId = useParams();
//   const [detailId, setDetailId] = useState(postId);
//   const [desc, setDesc] = useState('');
//   const [title, setTitle] = useState('');
//   const [language, setLanguage] = useState('');

//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/posts/${detailId.postId}`, {
//         headers: {
//           authorization: `Bearer ${localStorage.accessToken}` || null,
//         },
//       })
//       .then((res) => {
//         const data = res.data.data;
//         setPostTitle(data.title);
//         setPostContent(data.content);
//         console.log(data);
//         setPostStackNumber(res.data.stacks);
//         setPostDate(data.updatedAt);
//         setPostNickname(data.User.nickname);
//         setIsimg(data.User.image);
//         setIsinterest(data.totalInterests);
//         res.data.message === "get author's post detail successed"
//           ? setIsAuthor(true)
//           : setIsAuthor(false);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     commentList();
//   }, []);

//   return (
//     <section className="writeContainer">
//       <input
//         className="titleInput"
//         type="text"
//         placeholder="제목을 입력하세요"
//         onChange={TitleChange}
//         value={title || ''}
//       />
//       <div className="writeLanguages">
//         <h2>사용 언어 : </h2>
//         <LanguageSelect setLanguage={setLanguage} />
//       </div>
//       <div className="writeEditor">
//         <Editor value={desc || ''} onChange={onEditorChange} />
//       </div>
//       <div className="writBtn">
//         <button>취소</button>
//         <button onClick={createPost}>등록</button>
//       </div>
//     </section>
//   );
// };

// export default Edit;
