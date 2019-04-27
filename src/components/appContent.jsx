import React from 'react';
import styled from 'styled-components';

const StyledAppContent = styled.div`
  overflow: auto;
  flex: 1 1 0;
  height: 100vh;
  padding: 15px;
  background-color: #222;
  color: #ddd;
`;

const AppContent = props => (
  <StyledAppContent>
    {
      props.children // eslint-disable-line
    }
  </StyledAppContent>
);

export default AppContent;
