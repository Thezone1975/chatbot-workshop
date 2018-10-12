import React from 'react'
import { Link } from 'gatsby'
import { Alert, UncontrolledTooltip } from 'reactstrap'

import Layout from '../components/layout'

const Lab5 = () => (
  <Layout>
    <h2>Lab 5: Deployment to WordPress</h2>
    <p>Lorem ipsum...</p>
    <h3>What you will accomplish</h3>
    <p>In this lab you will:</p>
    <ol>
      <li>...;</li>
      <li>...;</li>
      <li>....</li>
    </ol>
    <h3>Task 1: Installing and activing the WordPress plugin</h3>

    <Alert color="success">
      We now know how to create basic chatbots and deploy them for our customers
      to use. The next step is to make our chatbot better.
    </Alert>
    <p style={{ textAlign: 'center', margin: '20px' }}>
      <Link className="btn btn-secondary" to="/lab-4">
        Back to Lab 4
      </Link>{' '}
      <Link className="btn btn-primary" to="/lab-6">
        Proceed to Lab 6
      </Link>
    </p>
  </Layout>
)

export default Lab5
