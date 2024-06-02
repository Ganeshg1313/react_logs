import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div className="text-3xl font-bold text-gray-900" style={{ width }}>
      MegaBlog
    </div>
  );
}

export default Logo;

