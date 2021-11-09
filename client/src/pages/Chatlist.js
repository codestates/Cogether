import React from 'react';
import styled from 'styled-components';
import ChattingContainer from '../components/ChattingContainer';

const Container = styled.div`
  min-height: 100vh;
`;
const Chatlist = () => {
  return (
    <Container>
      <ChattingContainer />
    </Container>
  );
};

export default Chatlist;
