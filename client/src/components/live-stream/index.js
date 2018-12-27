import React from 'react';

import { Link } from "@reach/router"

export default function LiveStream({ id }) {
  return(
    <div>
      <Link to="/">Home</Link>{" "}
      Stream {id} comendo solta!
    </div>
  )
}
