import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_STREAM = gql`
  query Stream($streamId: ID!) {
    stream(streamId: $streamId) {
      title
      description
    }
  }`;

function StreamWatcher({ id }) {
  return (
    <Query query={GET_STREAM} variables={{ streamId: id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <div>
            <Link to="/">Home</Link>
            Stream {data.stream.title} comendo solta!
          </div>
        );
      }}
    </Query>
  );
}

StreamWatcher.propTypes = {
  id: PropTypes.string.isRequired,
};

export default StreamWatcher;
