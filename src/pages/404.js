import React from 'react'
import logo from '../img/funkyfreshdj.png'

const NotFoundPage = () => (
  <section className="bg-light-gray black-70 pa3 pa5-ns bt b--black-1" style={{fontFamily: "camingodos-web"}}>
    <div className="mw8 center" >
      <div className="pt5 pb4 mw5 center">
        <img className="w-100" src={logo} alt="Funky Fresh Logo" />
      </div>
      <h1>NOT FOUND</h1>
      <div className="pa3 tc measure mw6 center f3">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </section>
)

export default NotFoundPage
