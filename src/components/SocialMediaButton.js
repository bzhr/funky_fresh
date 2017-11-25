import React from 'react';

export default (data) => {
  return(
    <a className='h2 w2 link dim gray dib w2 br-100 mr3 pa2 bg-near-white ba b--black-10'
       target="_blank" href={data.link}
       title={data.link}
       >
      <img className="center" src={data.icon}></img>
    </a>
  );
};
