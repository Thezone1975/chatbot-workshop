import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Lab 1: Create something</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go to the start</Link>
  </Layout>
)

export default SecondPage
