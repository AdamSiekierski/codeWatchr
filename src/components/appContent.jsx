import React from 'react';
import styled from 'styled-components';

const StyledAppContent = styled.div`
  overflow: auto;
  flex: 1 1 0;
  padding: 20px 0 0 0;
`;

const AppContent = () => (
  <StyledAppContent>
    Hello World!
  </StyledAppContent>
);

export default AppContent;
