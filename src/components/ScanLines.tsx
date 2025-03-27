
import React from 'react';

const ScanLines: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-screen w-screen overflow-hidden opacity-10">
      <div className="scanline-effect absolute inset-0"></div>
      <div className="crt-effect absolute inset-0"></div>
    </div>
  );
};

export default ScanLines;
