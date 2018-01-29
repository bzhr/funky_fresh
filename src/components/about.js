import React from 'react';


export default ({ data }) => {
  return (
    <section className="bg-near-black black-70 pa3 pa5-ns bt b--black-1 w-100">
      <div className="center fl w-100 vh-100 dt">
        <div className="fl w-50 center">
          <img
            className="svg center mw5"
            style={{ svg: "white" }}
            src={logo}
            alt="Funky Fresh Logo"
          />
        </div>
        <div className="v-mid dtc tc fl w-50 bg-white h3">
          <div
            className="lh-copy pa3 tc measure white f3"
            dangerouslySetInnerHTML={{ __html: data.excerpt }}
          />
        </div>
      </div>
    </section>
  );
};
