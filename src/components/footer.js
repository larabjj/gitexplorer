import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer className="footer">
    <p className="footer__copyright dark-white">
      Made with <span>❤</span> by{' '} pablolc
      <a
        href="https://twitter.com/pablolc_"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        Twitter
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  dark: PropTypes.bool
};

export { Footer };
