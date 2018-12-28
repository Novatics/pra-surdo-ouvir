import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Router } from '@reach/router';
import App from './App';
import Hello from './Hello';
import StreamWatcher from './components/stream-watcher';
import StreamRecorder from './components/stream-recorder';

ReactDOM.render(
  <section>
    <Hello />
    <Router>
      <App path="/" />
      <StreamWatcher path="stream/:id" />
      <StreamRecorder path="create" />
    </Router>
  </section>,
  document.getElementById('root'),
);
