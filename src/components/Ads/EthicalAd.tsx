import React, { useEffect, useRef } from 'react';

interface EthicalAdProps {
  placement: string;
}

const EthicalAd: React.FC<EthicalAdProps> = ({ placement }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Placeholder for EthicalAds script injection
    // This is where you would load the EthicalAds script if not already present
  }, []);

  return (
    <div className={`ad-slot ad-${placement}`} aria-label="Advertisement" role="region" ref={adRef}>
      <span className="sr-only">Advertisement</span>
      <div id={`ethical-ad-${placement}`}></div>
    </div>
  );
};

export default EthicalAd;
