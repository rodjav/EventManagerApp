import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
//import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/material-design-lite/dist/material.min.css';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

render(
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
   </HashRouter >,
  document.getElementById('app')
);