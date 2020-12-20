import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <skChaseDot>
      <p>
        Developed with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
      </p>
    </skChaseDot>
    <skChaseDot>
      <p>
        {' '}
        by <a href="https://github.com/gabrielprrd">Gabriel Afonso</a>
      </p>
    </skChaseDot>
  </footer>
);

export default Footer;
