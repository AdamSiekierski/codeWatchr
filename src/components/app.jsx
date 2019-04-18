import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WindowDragRegion from './windowDragRegion';
import SideBar from './sideBar';
import AppContent from './appContent';

import Home from '../routes/home';
import Lol from '../routes/lol';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const App = () => (
  <Router>
    <StyledWrapper>
      <WindowDragRegion />
      <SideBar />
      <AppContent>
        <Route path="/" exact component={Home} />
        <Route path="/lol" component={Lol} />
      </AppContent>
    </StyledWrapper>
  </Router>
);

export default hot(module)(App);
