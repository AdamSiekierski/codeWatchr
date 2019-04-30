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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isWatchingStarted: false,
    };

    this.handleWatching = this.handleWatching.bind(this);
  }

  handleWatching(status) {
    this.setState({
      isWatchingStarted: status,
    });
  }

  render() {
    return (
      <Router>
        <StyledWrapper>
          <WindowDragRegion />
          <SideBar hidden={this.state.isWatchingStarted} />
          <AppContent>
            <Switch>
              <Route path="/history" component={History} />
              <Route render={() => <Watch parentWatchingCallback={this.handleWatching} />} />
            </Switch>
          </AppContent>
        </StyledWrapper>
      </Router>
    );
  }
}

export default hot(module)(App);
