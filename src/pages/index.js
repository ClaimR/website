import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import concept from '../assets/images/concept.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'ClaimR'

    const guideUrl = '//gist.github.com/Addono/448ff19285fcf229fd89a35662334e6b'
    const liveApiUrl = '//api.claimr.tools'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Verified Locations Made Simple</h2>
              </header>
              <p>
                Spoofing positioning systems, such as GPS, has become common
                practice. Take for example AR based games (Pokemon Go and the
                like) and many have an active community of "spoofers" who modify
                the location perceived by their phone to get in-game benefits.
              </p>
              <p>
                ClaimR uses raw measurements from positioning system (GNSS)
                satellites and analyses these to detect malicious location
                manipulations. Our goal is to make verifying your user's
                location simple, hence you do not need to know anything about
                the intricacies of GNSS in order to reap its benifits when using
                ClaimR.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={concept} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              {/* <ul className="major-icons">
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
              </ul> */}
            </div>
            <div className="col-6">
              <header className="major">
                <h2>What We Do</h2>
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
                <h2>Use Cases</h2>
              </header>
              {/* <p>
                When .
              </p> */}
            </div>

            <div className="col-4">
              <span className="image fit">
                <span className="icon style1 major fa-id-badge"></span>
              </span>
              <h3>Identification</h3>
              <p>
                Knowning someones location with certainty can be used as an
                additional layer in identification and authentication processes.
                Using verified locations can be a non-intrusive method to
                quickly increase the confidence for a users identification
                request.
              </p>
              {/* <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>*/}
            </div>
            <div className="col-4">
              <span className="image fit">
                <span className="icon style3 major fa-shield"></span>
              </span>
              <h3>Fraud Prevention</h3>
              <p>
                Many services today are depending on location services for their
                functioning, however it is near trivial for users to use
                software to spoof their location. This spoofed location can be
                used for fraudulent transactions, like cheating in location
                based games
              </p>
              {/* 
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="col-4">
              <span className="image fit">
                <span className="icon style6 major fa-map"></span>
              </span>
              <h3>Privacy</h3>
              <p>
                ClaimR creates certificates which do not contain a users' exact
                location. Instead, a certificate includes an area in which the
                user is. This area can be small, like several square meters, or
                large, like a continent. As such, a user can get a claim that
                they are in a certain region without disclosing their exact
                location.
              </p>
              {/* <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </section>

        {/* <section id="demo" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>See it in Action</h2>
            </header>
            <p>
              Are your fingers itching to get started? Just go and explore our{' '}
              <a href={liveApiUrl}>live API</a> or follow the{' '}
              <a href={guideUrl}>"Getting Started"</a> guide.
            </p>
            <ul className="actions uniform">
              <li>
                <a href={liveApiUrl} className="button special">
                  Live API
                </a>
              </li>
              <li>
                <a href={guideUrl} className="button">
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
        </section> */}
      </Layout>
    )
  }
}

export default Homepage
