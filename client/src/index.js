import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import StreamWatcher from './components/stream-watcher';
import StreamRecorder from './components/stream-recorder';

import { Router } from "@reach/router"

ReactDOM.render(
  <Router>
    <App path='/'/>
    <StreamWatcher path='stream/:id'/>
    <StreamRecorder path='create'/>
  </Router>,
  document.getElementById('root'));
