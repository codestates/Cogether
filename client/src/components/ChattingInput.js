import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const ChattingForm = styled.form`
  margin-top: 1rem;
`;

const Div = styled.div`
  display: flex;
`;
const InputArea = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
`;
const Button = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 5rem;
  height: 45px;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  flex-basis: 5rem;
  background: #56d0a0;
  &:hover {
    background: ${lighten(0.08, '#56d0a0')};
  }
  &:active {
    background: ${darken(0.1, '#56d0a0')};
  }
`;
function ChattingInput({ onSubmit, onMessageChange, message }) {
  return (
    <>
      <ChattingForm onSubmit={onSubmit}>
        <Div>
          <InputArea
            onChange={onMessageChange}
            value={message}
            autoFocus
            required
          ></InputArea>
          <Button>전송</Button>
        </Div>
      </ChattingForm>
    </>
  );
}

export default ChattingInput;
