import React from 'react'
import { Nav, NavItem } from 'reactstrap'

import NavigationLink from './navigation-link'

const Navigation = () => (
  <div
    style={{
      background: '#E5CCFF',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <Nav pills>
        <NavItem>
          <NavigationLink to="/" exact={true}>
            Home
          </NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to="/lab-1">Lab 1: Set Up</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to="/lab-2">Lab 2: Intents</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to="/lab-3">Lab 3: Entities</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to="/lab-4">Lab 4: Dialog</NavigationLink>
        </NavItem>
        <NavItem>
          <NavigationLink to="/lab-5">Lab 5: Deployment</NavigationLink>
        </NavItem>
      </Nav>
    </div>
  </div>
)

export default Navigation
