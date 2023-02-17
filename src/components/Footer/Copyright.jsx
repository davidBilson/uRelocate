import React from 'react';

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className='copyright'>
      Copyright © {year} URELOCATE. All rights reserved.
    </div>
  );
};

export default Copyright;
