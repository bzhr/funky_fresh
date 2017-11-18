import React from 'react';

export default ({ data }) => {
  const orangeBackgroung = {backgroundColor: "#F48120"}
  return (
      <section style={orangeBackgroung} className="black-70 baskerville w-100 pa3 pa5-ns bt b--black-1">
        <div className="mw8 center">
          <h2 className="ttu tracked f1 tc fw4">{data.frontmatter.title}</h2>
          <div className="tc measure mw6 center f3" dangerouslySetInnerHTML={{ __html: data.excerpt }} />
        </div>
      </section>
  );
};
