import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { URL } from '../Url';
import '../scss/Setting.scss';
const Setting = () => {
  const [userProfileImg, setUserProfileImg] = useState(null);
  const [file, setFile] = useState(null);
  const [update, setUpdate] = useState({
    nickname: '',
    password: '',
  });

  useEffect(() => {
    axios
      .get(`${URL}/users/userinfo`, {
        headers: {
          authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        setUserProfileImg(data.image);
        setUpdate({ ...update, nickname: data.nickname });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const insertImg = (e) => {
    setFile(e.target.files[0]);
    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setUserProfileImg(previewImgUrl);
      }
    };
  };

  const deleteImg = () => {
    setUserProfileImg(null);
  };

  const handleInputValue = (key) => (e) => {
    setUpdate({ ...update, [key]: e.target.value });
  };

  const userInfoUpdate = () => {
    const formData = new FormData();

    if (update.nickname) {
      formData.append('nickname', update.nickname);
    }
    if (file) {
      formData.append('userProfileImg', file);
    }
    if (update.password) {
      formData.append('password', update.password);
    }
    axios
      .patch(`${URL}/users/userinfo/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((res) => {
        console.log('성공');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="setting">
      <div className="setting-header">
        <h2>회원 정보수정</h2>
      </div>
      <div className="setting-img">
        <img
          className="profile"
          src={userProfileImg ? userProfileImg : './images/default-profile.jpg'}
        ></img>
      </div>
      <div className="settig-profile">
        <label>
          프로필 사진 변경
          <input
            className="hide"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={(e) => insertImg(e)}
          ></input>
        </label>
        <button onClick={deleteImg}>프로필 사진 제거</button>
      </div>
      <div className="settig-nickname">
        <p>닉네임 : </p>
        <input
          onChange={handleInputValue('nickname')}
          value={update.nickname}
        ></input>
      </div>
      <div className="settig-password">
        <p>비밀번호 : </p>
        <input onChange={handleInputValue('password')}></input>
      </div>
      <div className="setting-userInfo">
        <button onClick={userInfoUpdate}>변경 완료</button>
        <button>회원 탈퇴</button>
      </div>
    </div>
  );
};

export default Setting;
