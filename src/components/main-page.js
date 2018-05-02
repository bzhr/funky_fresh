import React from "react";
import Link from "gatsby-link";
import RenderBasedOnSize from "./RenderBasedOnSize";
import About from "./about";
import Img from "gatsby-image";

import logo from "../img/funkyfreshdj_white.png";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };

    this.expandedText = this.expandedText.bind(this);
  }

  expandedText() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }
  render() {
    const about = this.props.about;
    const logoData = this.props.logoData;
    const moreLess = this.state.expanded ? "less" : "more";

    const excerpt = (
      <p className="w-100 center lh-copy pa3 tc measure white f3">
        {about.excerpt}
      </p>
    );
    const fullInfo = (
      <div
        className="w-100 center lh-copy pa3 tc measure white f3"
        dangerouslySetInnerHTML={{ __html: about.html }}
      />
    );
    const expanded = this.state.expanded;
    function getMoreTextDiv(expanded) {
      if (expanded) {
        return fullInfo;
      } else {
        return excerpt;
      }
    }
    const info = getMoreTextDiv(expanded);
    return (
      <div className="pt5 pv1-ns w-100">
        <RenderBasedOnSize />
        <section className="bg-near-black black-70 pa3 pa5-ns bt b--black-1 w-100">
          <div className="w-100 vh-100 dt w-100">
            <article className="fl w-50-ns w-100 vh-100 dt">
              <div className="
              dtc v-mid tc white">
                <Img
                  className="svg center mw5"
                  sizes={logoData.sizes}
                  position={"absolute"}
                  alt={"logo"}
                />
              </div>
            </article>
            <div className="fl w-50-ns w-100 vh-100 dt">
              <div className="
                dtc v-mid tc white">
                {info}
                <button
                  className="f6 link  ba ph3 pv2 mb2 dib hover-bg-gray"
                  onClick={this.expandedText}
                >
                  Read {moreLess}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
