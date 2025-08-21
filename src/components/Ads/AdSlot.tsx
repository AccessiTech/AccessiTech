import React from 'react';
import EthicalAd from './EthicalAd';
import AdSenseAd from './AdSenseAd';
import { useAdContext } from './adsHelper';

interface AdSlotProps {
  placement: string;
  network?: 'ethicalads' | 'adsense';
  adProps?: Record<string, any>;
}

const AdSlot: React.FC<AdSlotProps> = ({ placement, network, adProps }) => {
  const ctx = useAdContext();
  const net = network || ctx.network;

  if (net === 'ethicalads') {
    return <EthicalAd placement={placement} {...adProps} />;
  }
  if (net === 'adsense') {
    return <AdSenseAd placement={placement} {...adProps} />;
  }
  return null;
};

export default AdSlot;
