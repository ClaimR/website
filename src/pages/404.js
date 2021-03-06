import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet title={'ClaimR - Page not found'} />

    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>NOT FOUND</h2>
          </header>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
