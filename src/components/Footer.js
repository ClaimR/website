import React from 'react'

const email = 'contact@claimr.tools'

const EmailContactLink = ({ children, className = '' }) => (
  <a href={`mailto:${email}`} className={className}>
    {children}
  </a>
)

const Footer = () => (
  <section id="footer">
    <ul className="icons">
      {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
      {/* <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li> */}
      {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li> */}
      <li>
        <EmailContactLink className="icon alt fa-envelope">
          <span className="label">Email</span>
        </EmailContactLink>
      </li>
      <li>
        <a
          href="https://github.com/ClaimR"
          className="icon alt fa-github"
          alt="ClaimR's Github"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCZRWpBaWAeLP6uYLE0kDbRg"
          alt="ClaimR's YouTube Channel"
          className="icon alt fa-youtube-play"
        >
          <span className="label">YouTube</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>Copyright © {new Date().getFullYear()}, ClaimR</li>
      <li>
        <EmailContactLink>{email}</EmailContactLink>
      </li>
      <li>
        Proudly made in{' '}
        <img
          src="https://lipis.github.io/flag-icon-css/flags/4x3/nl.svg"
          width="15px"
          alt="Flag Netherlands"
        />{' '}
        and{' '}
        <img
          src="https://lipis.github.io/flag-icon-css/flags/4x3/se.svg"
          width="15px"
          alt="Flag Sweden"
        />
      </li>
      <li>
        Design by <a href="//html5up.net">HTML5 UP</a>
      </li>
    </ul>
  </section>
)

export default Footer
