import React from 'react';
import styled from 'styled-components';

const StyledAppContent = styled.div`
  overflow: auto;
  flex: 1 1 0;
  padding: 20px 0 0 0;
`;

const AppContent = props => (
  <StyledAppContent>
    {
      props.children // eslint-disable-line
    }
  </StyledAppContent>
);

export default AppContent;
