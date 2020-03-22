import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud"></span>
          <h1>
            Hi, I'm <strong>ClaimR</strong>, the secure, convenient
            <br /> and trustworthy location verification service.
          </h1>
          <p>
            With me on your side, verifying your user's location will be a
            breeze.
          </p>
          <ul className="actions">
            <li>
              <a href="#demo" className="button scrolly">
                Get started now
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
