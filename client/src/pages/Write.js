import React,{useState} from 'react'
import Editor from '../components/EditorComponent';

const Write = () => {
  const [desc, setDesc] = useState('');
  const [title,setTitle] = useState('');
  function onEditorChange(value) {
    setDesc(value)
  }
  const TitleChange = (e) => {
    setTitle(e.target.value)
  }
  return (
    <section>
      <input 
        type="text"
        placeholder="제목을 입력하세요"
        onChange={TitleChange}
        value={title}
      />
      <div>
        <Editor value={desc} onChange={onEditorChange} />
      </div>
    </section>
  )
};

export default Write;