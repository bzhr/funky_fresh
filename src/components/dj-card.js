import React from 'react';
import mfdoom from '../pages/djs/img/mfdoom.jpg'

export default ({ data }) => {
  return(
    <section className="tc pa3 pa5-ns">
      <article className="hide-child relative ba b--black-20 mw5 center">
        <img src={mfdoom} className="db" alt="DJ Photo" />
        <div className="pa2 bt b--black-20">
          <a className="f6 db link black hover-black-60" href="#">MF Doom</a>
          <p className="f6 gray mv1">5 mutual friends</p>
          <a className="link tc ph3 pv1 db bg-animate bg-near-black hover-bg-black-60 white f6 br1" href="#">Download sample pack</a>
        </div>
      </article>
    </section>
  );
};
