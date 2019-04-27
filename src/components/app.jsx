import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WindowDragRegion from './windowDragRegion';
import SideBar from './sideBar';
import AppContent from './appContent';

import Watch from '../routes/watch';
import History from '../routes/history';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const App = () => (
  <Router>
    <StyledWrapper>
      <WindowDragRegion />
      <SideBar />
      <AppContent>
        <Switch>
          <Route path="/history" component={History} />
          <Route component={Watch} />
        </Switch>
      </AppContent>
    </StyledWrapper>
  </Router>
);

export default hot(module)(App);
