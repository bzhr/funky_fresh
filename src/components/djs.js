import React from 'react';
import DjCard from './dj-card';

export default ({ data }) => {
  return(
    <article className="z-500 bg-near-black pv2 mt3">
      <h2 className="center light-gray ttu tracked f1 tc fw4">Funky Fresh DJs</h2>
      <div className="cf pa2 w-75-l center" >
        {data.map(djInfo => {
          return(
            <DjCard node={djInfo.node}  key={djInfo.node.frontmatter.title}/>
          )
        })}
      </div>
    </article>
  );
};
