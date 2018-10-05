import React from 'react'
import { Nav, NavItem } from 'reactstrap';

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
        maxWidth: 960
      }}
    >
        <Nav pills>
          <NavItem>
            <NavigationLink to="/" exact={true}>Home</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink to="/lab-1">Lab 1</NavigationLink>
          </NavItem>
        </Nav>
      </div>

    </div>
)

export default Navigation
