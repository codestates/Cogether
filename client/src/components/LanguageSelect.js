import React from 'react';
import Select from 'react-select';

const LanguageSelect = ({ setLanguage }) => {
  const customStyles = {
    control: (css) => ({
      ...css,
      maxWidth: '500px',
      width: '100%',
      minHeight: '3rem',
    }),
  };

  const languageList = [
    { value: '1', label: 'JavaScript' },
    { value: '2', label: 'TypeScript' },
    { value: '3', label: 'React' },
    { value: '4', label: 'NodeJS' },
    { value: '5', label: 'Python' },
    { value: '6', label: 'Django' },
    { value: '7', label: 'C' },
    { value: '8', label: 'Java' },
    { value: '9', label: 'SQL' },
  ];

  const setLikeLanguages = (e) => {
    setLanguage(e);
  };

  return (
    <div style={{ width: '500px' }}>
      <Select
        isMulti
        styles={customStyles}
        options={languageList || ''}
        placeholder="사용할 언어를 선택하세요"
        onChange={(e) => {
          setLikeLanguages(e);
        }}
      />
    </div>
  );
};

export default LanguageSelect;
