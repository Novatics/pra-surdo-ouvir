import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from '@reach/router';

import './App.css';

import StreamCardList from './components/stream-card-list';

const GET_STREAMS = gql`
  {
    streams {
      id
      title
      description
    }
  }
`;


export default function App() {
  return (
    <React.Fragment>
      <Link to="/create">Stream Now</Link>
      <Query query={GET_STREAMS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return <StreamCardList listofStreams={data.streams} />;
        }}
      </Query>
    </React.Fragment>
  );
}
