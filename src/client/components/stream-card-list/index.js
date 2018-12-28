import React from 'react';
import PropTypes from 'prop-types';

import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import StreamCard from '../stream-card';

function StreamCardList({ listofStreams }) {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        {listofStreams.map(({ id, title, description }) => (
          <Col
            key={id}
            lg={{ span: 8, pull: 0, push: 0 }}
            xs={{ span: 22, pull: 1, push: 1 }}
            style={{ paddingTop: '20px' }}
          >
            <StreamCard id={id} title={title} description={description} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

StreamCardList.propTypes = {
  listofStreams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StreamCardList;
