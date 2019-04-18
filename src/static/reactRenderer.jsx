import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Typography from 'typography';
import App from '../components/app';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: '1.4',
  bodyFontFamily: ['Montserrat', 'sans-serif'],
});

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>
    , document.getElementById('App') // eslint-disable-line
  );
  typography.injectStyles();
};

render();
