import React from 'react';

import Card from 'antd/lib/card';

import { navigate } from "@reach/router"

export default function StreamCard({ id, title, description }) {
  function openStream() {
    navigate(`/stream/${id}`)
  }

  return (
    <Card title={title} onClick={openStream}>
       <p>{description}</p>
    </Card>
  )
}
