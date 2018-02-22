import React from "react";
import Link from "gatsby-link";
import Mixcloud from "react-icons/lib/fa/mixcloud";
import SoundCloud from "react-icons/lib/fa/soundcloud";
import Instagram from "react-icons/lib/fa/instagram";
import Facebook from "react-icons/lib/fa/facebook";

export default () => {
  return (
    <header className="z-999 fixed bg-near-black w-100 ph3-ns">
      <div className="fl h-100">
        <nav className="h3 fw6 ttu tracked-ns">
          {/*<Link
            className="v-mid fl w-50 link dim light-gray dib f3-ns f4"
            style={{ outline: 0 }}
            to="/"
            title="Funky Fresh"
          >
            <p className="dib v-mid">Funky Fresh</p>
          </Link>
          <Link
            className="fl w-50 link dim light-gray dib f3-ns f4"
            style={{ outline: 0 }}
            to="/blog"
            title="Blog"
          >
            <p>Blog</p>
          </Link>*/}
            <div className="fl h-100 dt pa3-ns ph1">
            <div className="dtc v-mid">
              <Link
                className="link dim light-gray dib f3-ns f6"
                to="/"
              >
                <p className="dib h2 dtc v-mid">Funky Fresh</p>
              </Link>
            </div>
          </div>

          <div className="fl h-100 dt pa3-ns ph1">
          <div className="dtc v-mid">
            <Link
              className="link dim light-gray dib f3-ns f6"
              to="/blog"
            >
              <p className="dib h2 dtc v-mid">Blog</p>
            </Link>
          </div>
        </div>
        </nav>

      </div>
      <div className="fr  h3">
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
      </div>
    </header>
  );
};
