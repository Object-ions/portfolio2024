import React from 'react';

const Design = () => {
  return (
    <div className="design">
      <h3 style={{ lineHeight: '2' }}>This is a work in progress.</h3>
      <p>
        If you'd like to view my design portfolio, please{' '}
        <a
          href="https://object-ions.wixsite.com/portfolio/new-home"
          style={{ background: '#41e0d0', color: '#000', padding: '2px' }}
          alt="design portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here.
        </a>
        <br />
        Note: This website is best viewed on a desktop and may not be fully
        supported on mobile devices.
      </p>
    </div>
  );
};

export default Design;
