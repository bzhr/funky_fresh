import React from "react";
import RenderBasedOnSize from "./RenderBasedOnSize";
import About from "./about";
import Img from "gatsby-image";

import logo from "../img/funkyfreshdj_white.png";

export default ({ about, logoData }) => {
  return (
    <div className="pt5 pv1-ns">
      <RenderBasedOnSize />
      <section className="bg-near-black black-70 pa3 pa5-ns bt b--black-1 w-100">
        <div className="center fl w-100 vh-100 dt">
          <article className="fl w-50-ns w-100 vh-100 dt">
            <div className="
            dtc v-mid tc white">
              {/*<img
                className="svg center mw5"
                style={{ svg: "white" }}
                src={logo}
                alt="Funky Fresh Logo"
              />*/}
              <Img
                className="svg center mw5"
                sizes={logoData.sizes}
                position={'absolute'}
                alt={'logo'}
              />
            </div>
          </article>
          <div className="fl w-50-ns w-100 vh-100 dt">
            <div className="
              dtc v-mid tc white">
              <div
                className="w-100 center lh-copy pa3 tc measure white f3"
                style={{fontFamily: "Didact Gothic"}}
                dangerouslySetInnerHTML={{ __html: about.excerpt }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
