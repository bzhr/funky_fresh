import React from 'react';
import DjCard from './dj-card';

export default ({ data }) => {
  return(
    <article className="w-100 bg-light-gray " >
      <div className="cf pa2">
        <h2 className="center black-70 ttu tracked f1 tc fw4">DJs</h2>
        <div className="center" >
        <DjCard />
        <DjCard />
        <DjCard />
        <DjCard />
        <DjCard />
        <DjCard />
      </div>
      </div>
    </article>
  );
};
