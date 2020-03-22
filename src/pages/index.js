import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/concept.png'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'ClaimR'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Our Concept</h2>
              </header>
              <p>
                We offer an API which takes raw GNSS data to verify your user's
                locations. A user sends their raw GNSS data to our servers to
                request a certificate stating that they are in a specific area.
                If the location according to their GNSS data satisfies this
                claim, it is granted in the form of a JSON Web Token (JWT). This
                JWT can then be used by the user to proof to other parties their
                verified location.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <span className="icon style1 major fa-code"></span>
                </li>
                <li>
                  <span className="icon style2 major fa-bolt"></span>
                </li>
                <li>
                  <span className="icon style3 major fa-camera-retro"></span>
                </li>
                <li>
                  <span className="icon style4 major fa-cog"></span>
                </li>
                <li>
                  <span className="icon style5 major fa-desktop"></span>
                </li>
                <li>
                  <span className="icon style6 major fa-calendar"></span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>What we do</h2>
              </header>
              <p>
                Proving one’s location for additional security can be a
                challenge at best. Not only is it hard to prove, there are also
                further privacy concerns associated with it, thus requires an
                implementation that all parties can trust. To aid in this
                security obstacle we created ClaimR, a third party service
                verifying ones location with a signed certificate.
              </p>
              <p>
                Using raw GNSS data from your mobile we are able to determine
                your location and create a signed certificate verifying your
                location to any service requiring the information. Depending on
                the request, we can provide an exact pin pointed location or a
                more generic and broad placement, such as the city of London.
                ClaimR also makes location faking using software much harder due
                to the use of raw GNSS data, massively reducing the ease of
                attack.
              </p>
              <p>
                The user can effortlessly request and provide their location
                information to a service, whilst ensuring trust from both
                parties using the security and accuracy of the information via
                ClaimR.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Adipiscing amet consequat</h2>
              </header>
              <p>
                Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Ipsum feugiat consequat?</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
