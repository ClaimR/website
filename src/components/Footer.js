import React from 'react'

const Footer = () => (
  <section id="footer">
    <ul className="icons">
      {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
      {/* <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li> */}
      {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li> */}
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
          alt="ClaimR's Youtube Channel"
          className="icon alt fa-youtube-play"
        >
          <span className="label">Youtube</span>
        </a>
      </li>
      {/* <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li> */}
    </ul>
    <ul className="copyright">
      <li>&copy; ClaimR 2020</li>
      <li>
        Design by <a href="//html5up.net">HTML5 UP</a>
      </li>
    </ul>
  </section>
)

export default Footer
