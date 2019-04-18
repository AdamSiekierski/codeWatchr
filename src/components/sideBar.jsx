import React from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  min-width: 200px;
  resize: horizontal;
  height: 100vh;
  overflow: auto;
  background-color: #eee;
  border-right: 1px solid #ddd;
  padding: 20px 0 0 0;
`;

const SideBar = () => (
  <StyledSideBar>
    <h3>codeWatchr</h3>
  </StyledSideBar>
);

export default SideBar;
