import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import { Router } from '@reach/router';
import App from './App';
import StreamWatcher from './components/stream-watcher';
import StreamRecorder from './components/stream-recorder';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App path="/" />
      <StreamWatcher path="stream/:id" />
      <StreamRecorder path="create" />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
