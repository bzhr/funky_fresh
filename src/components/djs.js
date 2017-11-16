import React from 'react';
import DjCard from './dj-card';

export default ({ data }) => {
  return(
    <section className="w-100 bg-light-gray " >
      <div className="">
        <DjCard />
        <DjCard />
        <DjCard />
        <DjCard />
        <DjCard />
        <DjCard />
        <DjCard />
      </div>
    </section>
  );
};
