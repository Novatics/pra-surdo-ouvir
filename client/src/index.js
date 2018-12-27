import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import LiveStream from './components/live-stream';
import CreateStream from './components/create-stream';

import { Router } from "@reach/router"

ReactDOM.render(
  <Router>
    <App path='/'/>
    <LiveStream path='stream/:id'/>
    <CreateStream path='create'/>
  </Router>,
  document.getElementById('root'));
