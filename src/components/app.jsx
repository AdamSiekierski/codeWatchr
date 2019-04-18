import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

import WindowDragRegion from './windowDragRegion';
import SideBar from './sideBar';
import AppContent from './appContent';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const App = () => (
  <StyledWrapper>
    <WindowDragRegion />
    <SideBar />
    <AppContent />
  </StyledWrapper>
);

export default hot(module)(App);
