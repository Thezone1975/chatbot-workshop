// Adapted from th0th's suggestion to workaround Gatsby's bug
// around active links that require a manual click first:
// https://github.com/gatsbyjs/gatsby/issues/3238#issuecomment-413314187

import React from 'react';
import PropTypes from 'prop-types';
import {
  Link as GatsbyLink,
} from 'gatsby';

export default function NavigationLink(props) {
  const {
    exact,
    className,
    activeClassName,
    children,
  } = props;

  return (
    <GatsbyLink
      {...props}
      getProps={({ isCurrent, isPartiallyCurrent }) => ({
         className: [
          'nav-link',
          className,
          (exact && isCurrent) ? activeClassName : '',
          (!exact && isPartiallyCurrent) ? activeClassName : '',
        ].join(' ').trim(),
      })}
    >
      {children}
    </GatsbyLink>
  );
}

NavigationLink.propTypes = {
  exact: PropTypes.bool,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

NavigationLink.defaultProps = {
  exact: false,
  activeClassName: 'current-link',
  className: '',
};