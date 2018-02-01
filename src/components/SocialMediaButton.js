import React from 'react';
import Facebook from 'react-icons/lib/fa/facebook';
import Soundcloud from 'react-icons/lib/fa/soundcloud';
import Twitter from 'react-icons/lib/fa/twitter';
import Mail from 'react-icons/lib/md/mail';
import Youtube from 'react-icons/lib/fa/youtube-play';

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
    }
  }
  const Component = renderSwitch(data.type)
  return(
    <section className="">
      <a className='link dim gray dib br-100 pa1 pa2-ns ma1 bg-near-white ba'
         target="_blank" href={data.link}
         title={data.link}
         >
        <Component fill="near-black" className="v-mid dtc"></Component>
      </a>
    </section>
  );
};
