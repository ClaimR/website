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
          ...GatsbyImageSharpFluid_withWebp_noBase64
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
        language
      }
    }
  }
`

export default ({
  data: {
    site: { siteMetadata },
    file: { childImageSharp: conceptImage },
  },
}) => (
  <Layout>
    <Helmet title={siteMetadata.title}>
      <html lang={siteMetadata.language} />

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
            <Img fluid={conceptImage.fluid} />
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
            claimed via satellite positioning, significantly reducing faked
            locations while enhancing the privacy of end-users with customizable
            accuracy. We constantly learn from our customers to deliver the most
            reliable, flexible and usable solution.
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
            Spoofers can manipulate the location of their mobile devices to
            bypass country-specific restrictions for drones, to get in-game
            advantages in augmented reality based games and to contact people
            via location-based dating apps. ClaimR provides a second opinion for
            your app to <b>trust that the user location is legitimate</b>.
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
            Some <b>content should be accessible based on a user's location</b>.
            Ensuring that the users of a family account are based in the same
            household, or that competitors can’t track the vehicles of a ride
            hauling app with faked locations, can be eliminated with the ClaimR
            verification.
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
            Location tracking is a threat to user privacy, ClaimR uses claims
            which allow for <b>flexible verification accuracy</b>, varying from
            square meters to continents. If you want to earn the trust of your
            loyal users, ClaimR is your choice.
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
