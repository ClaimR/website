import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = () => (
  <section id="header">
    <div className="inner">
      <img
        src={logo}
        alt={'ClaimR Logo'}
        style={{ width: '32em', maxWidth: '90%' }}
      />
      <h1>Eliminating Location Fraud. Made Easy.</h1>
      <p>
        With <strong>ClaimR</strong> developers can verify their users'
        location. Fighting fraud caused by software and hardware spoofing of
        location positioning systems.
      </p>
      <ul className="actions">
        <li>
          <a
            href="https://youtube.com/watch?v=Nn2FN5SepGA"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch demo
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default Header
