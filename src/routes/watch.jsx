import React from 'react';
import styled from 'styled-components';

import TimeCounter from '../components/timeCounter';

const HomeWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WatchButton = styled.button`
  color: white;
  background-color: #587191;
  border: 1px solid #253e5e;
  border-radius: 2px;
  padding: 10px;
  outline: none;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #253e5e;
  }
`;

class Watch extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <TimeCounter />
        <WatchButton type="button"> Start </WatchButton>
      </HomeWrapper>
    );
  }
}

export default Watch;
