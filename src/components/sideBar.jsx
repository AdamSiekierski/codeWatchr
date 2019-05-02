import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import util from 'electron-util';

const StyledSideBar = styled.div`
  width: ${props => (props.hidden ? '0' : '250px')}; 
  height: 100vh;
  background-color: ${util.platform({
    macos: 'none',
    windows: '#222',
    linux: '#222',
  })};
  border: ${util.platform({
    macos: 'none',
    windows: '1px solid #111',
    linux: '1px solid #111',
  })};
`;

const HR = styled.hr`
  width: 100%;
  background: #111;
`;

const MenuItem = styled(Link)`
  display: block;
  width: 100%;
  color: #bed7f7;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  margin-left: 25px;
`;

const Title = styled.h3`
  margin: 25px 0 25px 0;
  text-align: center;
`;

const SideBar = props => (
  <StyledSideBar hidden={props.hidden}>
    <Title> codeWatchr 👨🏽‍💻 </Title> {/* eslint-disable-line */}
    {
      util.platform({
        macos: '',
        windows: <HR />,
        linux: <HR />,
      })
    }
    <MenuItem to="/">Watch</MenuItem>
    <MenuItem to="/history">History</MenuItem>
  </StyledSideBar>
);

SideBar.propTypes = {
  hidden: PropTypes.bool,
};

SideBar.defaultProps = {
  hidden: false,
};

export default SideBar;
