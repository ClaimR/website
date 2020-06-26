import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const videoGuideUrl = 'https://youtube.com/watch?v=EtDkMG_wSZ4'
const liveApiUrl = 'https://api.claimr.tools'
const reactNativeClientUrl = 'https://github.com/ClaimR/react-native-client'
const rawGalileoWinnerUrl =
  'https://www.gsa.europa.eu/newsroom/news/hackers-take-raw-galileo-challenge'

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
    site {
      siteMetadata {
        title
        siteUrl
        description
        keywords
      }
    }
  }
`

export default ({
  data: {
    site: { siteMetadata },
  },
  file,
}) => (
  <Layout>
    <Helmet title={siteMetadata.title}>
      <html lang="en" />

      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content={siteMetadata.keywords.join(', ')} />

      <link rel="canonical" href={siteMetadata.siteUrl} />
    </Helmet>

    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>Verified Location Made Simple</h2>
          </header>
          <p>
            User location provides value across mobile applications, while
            spoofing positioning systems, such as GPS, has become common
            practice. Security issues arise, whether location is used for
            connecting people, filtering content, navigation or regulation.
          </p>
          <p>
            ClaimR ensures the security of all location-based apps by analyzing
            raw measurements from GNSS satellites and detecting malicious
            location manipulations. Our{' '}
            <a href={rawGalileoWinnerUrl}>prize-winning API</a> makes verifying
            the location of your users quick and simple.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <Img fluid={file.childImageSharp.fluid} />
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
            The consequences of location manipulation within mobile services can
            be extensive. ClaimR was created to increase trust with a signed
            certificate offered by a third-party service.
          </p>
          <p>
            Using raw GNSS data from mobile phones, we can verify locations
            claimed via satelite positioning, significantly reducing faked
            locations while enhancing the privacy of end-users with a
            customizable accuracy. We constantly learn from our customers to
            deliver the most reliable, flexible and usable solution.
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
              alt="View ClaimR API Usage Video Guide on YouTube"
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
