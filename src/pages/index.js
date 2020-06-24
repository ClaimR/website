import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import concept from '../assets/images/concept.png'

const siteTitle = 'ClaimR'
const siteDescription =
  'ClaimR offers Verified Location-as-a-Service for mobile devices. We use state of the art GNSS technology to fight location fraud.'

const videoGuideUrl = 'https://youtube.com/watch?v=EtDkMG_wSZ4'
const liveApiUrl = 'https://api.claimr.tools'
const reactNativeClientUrl = 'https://github.com/ClaimR/react-native-client'

export const query = graphql`
  query {
    file(relativePath: { eq: "concept.png" }) {
      childImageSharp {
        fluid(maxWidth: 1126, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <Helmet title={siteTitle}>
      <html lang="en" />

      <meta name="description" content={siteDescription} />
    </Helmet>

    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>Verified Location Made Simple</h2>
          </header>
          <p>
            Spoofing positioning systems, such as GPS, has become common
            practice. Take for example AR based games (Pokemon Go and the like)
            and many have an active community of "spoofers" who modify the
            location perceived by their phone to get in-game benefits.
          </p>
          <p>
            ClaimR uses raw measurements from positioning system (GNSS)
            satellites and analyses these to detect malicious location
            manipulations. Our goal is to make verifying your user's location
            simple, hence you do not need to know anything about the intricacies
            of GNSS in order to reap its benifits when using ClaimR.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <Img fluid={data.file.childImageSharp.fluid} />
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
            Proving one’s location for additional security can be a challenge at
            best. Not only is it hard to prove, there are also further privacy
            concerns associated with it, thus requires an implementation that
            all parties can trust. To aid in this security obstacle we created
            ClaimR, a third party service verifying ones location with a signed
            certificate.
          </p>
          <p>
            Using raw GNSS data from your mobile we are able to determine your
            location and create a signed certificate verifying your location to
            any service requiring the information. Depending on the request, we
            can provide an exact pin pointed location or a more generic and
            broad placement, such as the city of London. ClaimR also makes
            location faking using software much harder due to the use of raw
            GNSS data, massively reducing the ease of attack.
          </p>
          <p>
            The user can effortlessly request and provide their location
            information to a service, whilst ensuring trust from both parties
            using the security and accuracy of the information via ClaimR.
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
            <span className="icon style3 major fa-shield"></span>
          </span>
          <h3>Fraud Prevention</h3>
          <p>
            Manipulating the location reported by positioning devices has become
            simple and common. As a result augmented reality based games, such
            as Pokemon Go, have attracted a vast group of "spoofers". Spoofers
            manipulate the location reported by their mobile devices to get
            in-game advantages. ClaimR acts as a second opinion such that{' '}
            <b>
              your app can trust that the location of the user is legitimate
            </b>
            .
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
            <span className="icon style1 major fa-id-badge"></span>
          </span>
          <h3>Authorization</h3>
          <p>
            Some content or information should only be possible to access based
            on your user's location. Take for example a ride hauling app,
            competitors would get a strong advantage if they pretend to be a
            user and get access to data on where all vehicles are. Limit the
            data a user can access to merely what's in their direct surroundings
            eliminates this threat. With verified location you can{' '}
            <b>
              prevent your users from accessing data they are not supposed to
              have access to
            </b>
            .
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
            <span className="icon style6 major fa-map"></span>
          </span>
          <h3>Privacy Enhancing</h3>
          <p>
            ClaimR lets your users create "claims" about their location. Claims
            allows your users to prove something about their location{' '}
            <b>without sharing their exact location</b>. A claim could be that
            the user is within a certain area. You can decide what this area is
            based on your use-case, it can be anything between a couple of
            square meters up till an entire continent.
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

    <section id="getting-started" className="main style3 special">
      <div className="container">
        <header className="major">
          <h2>Getting Started</h2>
        </header>
        <p className="align-center">
          Looking to discover our API? Visit our{' '}
          <a href={liveApiUrl}>live API</a> or watch the{' '}
          <a href={videoGuideUrl}>"Getting Started"</a> video guide.
          <br />
          Developing for Android using React Native? Check out our{' '}
          <a href={reactNativeClientUrl}>React Native SDK</a>.
        </p>
        <ul className="actions uniform">
          <li>
            <a
              href={liveApiUrl}
              className="button special"
              target="_blank"
              rel="noopener noreferrer"
              alt="Visit the ClaimR API"
            >
              Live API
            </a>
          </li>
          <li>
            <a
              href={videoGuideUrl}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              alt="View ClaimR API Usage Video Guide on Youtube"
            >
              <span className="icon fa-youtube-play"></span> API Video Guide
            </a>
          </li>
          <li>
            <a
              href={reactNativeClientUrl}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              alt="Visit ClaimR's React Native SDK on Github"
            >
              <span className="icon fa-github"></span> React Native SDK
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
)
