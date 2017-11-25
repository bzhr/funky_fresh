import React from 'react';

export default ({ src }) => {
  return(
    <div>
      <iframe
        width="100%"
        height="120"
        src={src}
        frameBorder="0"
      />
    </div>
  )
}
