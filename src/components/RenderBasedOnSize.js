import React from "react";
import { render } from "react-dom";
import PromoVideo from "./PromoVideo";

class RenderBasedOnSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 800 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    const promoVideo = <PromoVideo />
    console.log(isDesktop);

    return (
      <div>
        {isDesktop ? promoVideo : null}
      </div>
    );
  }
}

export default RenderBasedOnSize;
