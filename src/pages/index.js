import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import drawingGdpr from '../assets/images/drawing-gdpr.svg'
import drawingMyLocation from '../assets/images/drawing-my-location.svg'
import drawingSecureLogin from '../assets/images/drawing-secure-login.svg'
import drawingSateliteOverhead from '../assets/images/drawing-satelite-overhead.svg'

const reactNativeClientUrl = 'https://github.com/ClaimR/react-native-client'
const rawGalileoWinnerUrl =
  'https://www.gsa.europa.eu/newsroom/news/hackers-take-raw-galileo-challenge'
const developerWebsiteUrl = 'https://developer.claimr.tools'
const docsApiGettingStartedUrl =
  'https://developer.claimr.tools/docs/react-native/getting-started'
const claimrAuthGooglePlayUrl =
  'https://play.google.com/store/apps/details?id=tools.claimr.auth'

export const query = graphql`
  query {
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
            <img src={drawingSateliteOverhead} alt="" />
          </span>
        </div>
      </div>
    </section>

    <section id="two" className="main style2">
      <div className="grid-wrapper">
        <div className="col-6" />
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
        </div>

        <div className="col-4">
          <img src={drawingMyLocation} className="icon major" alt={''} />
          <h3>Fraud Prevention</h3>
          <p>
            Spoofers can manipulate the location of their mobile devices to
            bypass country-specific restrictions for drones, to get in-game
            advantages in augmented reality based games and to contact people
            via location-based dating apps. ClaimR provides a second opinion for
            your app to <b>trust that the user location is legitimate</b>.
          </p>
          {/* 
          {/* 
            {/* 
          {/* 
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
          <img src={drawingSecureLogin} className="icon major" alt={''} />
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
          <img src={drawingGdpr} className="icon major" alt={''} />
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

    <section
      id={'claimr-auth'}
      className="main style2"
      style={{ background: '#272731' }}
    >
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>ClaimR Auth</h2>
          </header>
        </div>

        <div className="col-4">
          <p>
            ClaimR Auth allows you to <b>secure your online identities</b> with
            our location based authentication technology. You can use it today
            as a multi-factor authentication solution to protect your accounts
            on many well known services, like Google, Facebook, Twitter, Amazon
            and countless others. This allows you to control from which location
            login attempts can be completed, giving you an additional layer of
            security against malicious actors.
          </p>
          <p>
            Visit the{' '}
            <a href={claimrAuthGooglePlayUrl} alt="ClaimR Auth on Google Play">
              Google Play Store
            </a>{' '}
            and download ClaimR Auth for free.
          </p>
          <p>
            <ul className="actions">
              <li>
                <a
                  href={claimrAuthGooglePlayUrl}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Download ClaimR Auth on Google Play"
                >
                  Download ClaimR Auth
                </a>
              </li>
            </ul>
          </p>
        </div>

        <div className="col-8">
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
            }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/kEtMKDenrYU?vq=hd1080&modestbranding=1"
              title={'ClaimR Auth - Product Announcement (Video)'}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                border: '0',
              }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>

    <section id="getting-started" className="main style3 special">
      <div className="container">
        <header className="major">
          <h2>Getting Started</h2>
        </header>
        <p className="align-center">
          Looking to discover our API? Check out our{' '}
          <a href={docsApiGettingStartedUrl}>Getting Started</a> guide.
          <br />
          Developing for Android using React Native? Check out our{' '}
          <a href={reactNativeClientUrl}>React Native SDK</a>.
        </p>
        <ul className="actions uniform">
          <li>
            <a
              href={developerWebsiteUrl}
              className="button special"
              target="_blank"
              rel="noopener noreferrer"
              alt="Developer Website"
            >
              Developer Website
            </a>
          </li>
          <li>
            <a
              href={docsApiGettingStartedUrl}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              alt="Getting started documentation"
            >
              Getting Started
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
