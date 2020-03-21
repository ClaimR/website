import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud"></span>
          <h1>
            Hi, I'm <strong>ClaimR</strong>, with me on your side
            <br />
            it will be a breeze to verify your user's location.
          </h1>
          <p>
            Accumsan feugiat mi commodo erat lorem ipsum, sed magna
            <br />
            lobortis feugiat sapien sed etiam volutpat accumsan.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
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
