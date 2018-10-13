import React from 'react'
import { Link } from 'gatsby'
import { Alert } from 'reactstrap'

import Layout from '../components/layout'

const Lab6 = () => (
  <Layout>
    <h2>Lab 6: Let's improve it</h2>
    <p>Lorem ipsum...</p>

    <h3>What you will accomplish</h3>

    <p>In this lab you will:</p>
    <ol>
      <li>...;</li>
      <li>...;</li>
      <li>...;</li>
    </ol>

    <h3>Task 1: </h3>
    <p>Lorem ipsum...</p>
    <Alert color="success">Lorem ipsum...</Alert>
    <p style={{ textAlign: 'center', margin: '20px' }}>
      <Link className="btn btn-secondary" to="/lab-5">
        Back to Lab 5
      </Link>{' '}
      <Link className="btn btn-primary" to="/lab-7">
        Proceed to Lab 7
      </Link>
    </p>
  </Layout>
)

export default Lab6
