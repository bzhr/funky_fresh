import React from "react";
import Link from "gatsby-link";
import Mixcloud from "react-icons/lib/fa/mixcloud";
import SoundCloud from "react-icons/lib/fa/soundcloud";
import Instagram from "react-icons/lib/fa/instagram";
import Facebook from "react-icons/lib/fa/facebook";

export default () => {
  return (
    <header className="z-999 fixed bg-near-black w-100">
      <nav className="dt w-100 border-box pv3 ph2 ph5-ns">
        <div className="dtc v-mid tl">
          <Link
            className="link dim light-gray f6 f3-ns fw6-ns mr1 dib ttu tracked-ns"
            to="/"
            style={{ outline: "none", whiteSpace: "nowrap" }}
          >
            Funky Fresh
          </Link>

          <Link
            className="link dim light-gray f6 f3-ns fw6-ns dib ml2 ml4-ns ttu tracked-ns"
            to="/blog"
            style={{ outline: "none" }}
          >
            Blog
          </Link>
        </div>
        <div className="fr h-100 dt pa2 hover-bg-gray">
          <div className="dtc v-mid">
            <a
              className="b--light-gray bg-animate"
              href="https://www.mixcloud.com/Funky_Fresh/"
              title="Mixcloud"
              target="_blank"
            >
              <Mixcloud fill="white" className="dib h2 w2-l w2-m w1" />
            </a>
          </div>
        </div>
        <div className="fr h-100 dt pa2 hover-bg-gray">
          <div className="dtc v-mid">
            <a
              className="b--light-gray bg-animate "
              href="https://soundcloud.com/funky-fresh-211335302"
              title="SoundCloud"
              target="_blank"
            >
              <SoundCloud fill="white" className="dib h2 w2-l w2-m w1" />
            </a>
          </div>
        </div>
        <div className="fr h-100 dt pa2 hover-bg-gray">
          <div className="dtc v-mid">
            <a
              className="b--light-gray bg-animate"
              href="https://www.instagram.com/funkyfresh_sk/"
              title="Instagram"
              target="_blank"
            >
              <Instagram fill="white" className="dib h2 w2-l w2-m w1" />
            </a>
          </div>
        </div>

        <div className="fr h-100 dt pa2 hover-bg-gray">
          <div className="dtc v-mid">
            <a
              className="b--light-gray bg-animate"
              href="https://www.facebook.com/Funky-Fresh-1674317282822955/"
              title="Facebook"
              target="_blank"
            >
              <Facebook fill="white" className="dib h2 w2-l w2-m w1" />
            </a>
          </div>
        </div>
      </nav>
      {/* <div className="fr  h3 w-40">
        <div className="fr h-100 dt pa2 hover-bg-gray">
          <div className="dtc v-mid">
            <a
              className="b--light-gray bg-animate"
              href="https://www.mixcloud.com/Funky_Fresh/"
              title="Mixcloud"
              target="_blank"
            >
              <Mixcloud fill="white" className="dib h2 w2-l w2-m w1" />
            </a>
          </div>
        </div>
        <div className="fr h-100 dt pa2 hover-bg-gray">
          <div className="dtc v-mid">
            <a
              className="b--light-gray bg-animate "
              href="https://soundcloud.com/funky-fresh-211335302"
              title="SoundCloud"
              target="_blank"
            >
              <SoundCloud fill="white" className="dib h2 w2-l w2-m w1" />
            </a>
          </div>
        </div>
        <div className="fr h-100 dt pa2 hover-bg-gray">
          <div className="dtc v-mid">
            <a
              className="b--light-gray bg-animate"
              href="https://www.instagram.com/funkyfresh_sk/"
              title="Instagram"
              target="_blank"
            >
              <Instagram fill="white" className="dib h2 w2-l w2-m w1" />
            </a>
          </div>
        </div>

        <div className="fr h-100 dt pa2 hover-bg-gray">
          <div className="dtc v-mid">
            <a
              className="b--light-gray bg-animate"
              href="https://www.facebook.com/Funky-Fresh-1674317282822955/"
              title="Facebook"
              target="_blank"
            >
              <Facebook fill="white" className="dib h2 w2-l w2-m w1" />
            </a>
          </div>
        </div>
      </div> */}
    </header>
  );
};
