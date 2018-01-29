import React from "react";
import RenderBasedOnSize from "./RenderBasedOnSize";
import About from "./about";

import logo from "../img/funkyfreshdj_white.png";

export default ({ data }) => {
  return (
    <div className="">
      <RenderBasedOnSize />
      <section 
        className="bg-near-black black-70 pa3 pa5-ns bt b--black-1 w-100"
      >
        <div className="center fl w-100 vh-100 dt">
          <article className="fl w-50 vh-100 dt">
            <div className="
            dtc v-mid tc white ph3 ph4-l">
              <img
                className="svg center mw5"
                style={{ svg: "white" }}
                src={logo}
                alt="Funky Fresh Logo"
              />
            </div>
          </article>
          <div className="fl w-50 vh-100 dt">
            <div
              className="dtc v-mid tc white ph3 ph4-l lh-copy pa3 tc measure white f3"
              dangerouslySetInnerHTML={{ __html: data.excerpt }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
