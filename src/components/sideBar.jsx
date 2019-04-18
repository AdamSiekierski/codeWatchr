import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSideBar = styled.div`
  min-width: 200px;
  max-width: 50%;
  resize: horizontal;
  height: 100vh;
  overflow: auto;
  background-color: #eee;
  border-right: 1px solid #ddd;
  padding: 20px 5px 0 5px;
  text-align: center;
`;

const SideBar = () => (
  <StyledSideBar>
    <h3> codeWatchr 👨🏽‍💻 </h3> {/* eslint-disable-line */}
    <Link to="/">Home</Link>
    <Link to="/lol">Lol</Link>
  </StyledSideBar>
);

export default SideBar;
