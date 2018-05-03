import React from 'react';
import Facebook from 'react-icons/lib/fa/facebook';
import Soundcloud from 'react-icons/lib/fa/soundcloud';
import Twitter from 'react-icons/lib/fa/twitter';
import Mail from 'react-icons/lib/md/mail';
import Youtube from 'react-icons/lib/fa/youtube-play';
import Instagram from 'react-icons/lib/fa/instagram';
import Mixcloud from 'react-icons/lib/fa/mixcloud';

export default (data) => {
  function renderSwitch(param) {
    switch (param) {
      case "fb":
        return Facebook;
      case "sc":
        return Soundcloud;
      case "mail":
        return Mail;
      case "tw":
        return Twitter;
      case "yt":
        return Youtube;
      case "insta":
        return Instagram;
      case "mixcl":
        return Mixcloud;
    }
  }
  const Component = renderSwitch(data.type)

  let href = ""
  if (data.type == "mail") {
    href = "mailto:" + data.link
  } else {
    href = data.link
  }
  return(
    <section className="">
      <a className='link dim gray dib br-100 ma1 bg-moon-gray ba'
         target="_blank" href={href}
         title={data.link}
         >
        <Component fill="near-black" className="ma1 ma2-ns v-mid dtc"></Component>
      </a>
    </section>
  );
};
