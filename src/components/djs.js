import React from 'react';
import DjCard from './dj-card';

export default ({ data }) => {
  return(
    <article className="z-500 w-100 bg-near-black pv2" >
      <h2 className="center black-70 ttu tracked f1 tc fw4">DJs</h2>
      <div className="cf pa2 w-75-l center" >
        {data.map(djInfo => {
          return(
            <DjCard data={djInfo.node.frontmatter}  key={djInfo.node.frontmatter.title}/>
          )
        })}
      </div>
    </article>
  );
};
