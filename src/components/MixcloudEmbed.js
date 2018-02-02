import React from 'react';

export default ({ url }) => {
  return(
    <div>
      <iframe
        width="100%"
        height="120"
        src={url}
        frameBorder="0"
      />
    </div>
  )
}
