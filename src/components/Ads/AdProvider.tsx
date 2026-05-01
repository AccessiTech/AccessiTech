import { ReactNode } from 'react';
import { AdContext } from './adsHelper';

export interface AdContextType {
  network: 'ethicalads' | 'adsense';
  config: Record<string, any>;
}

interface AdProviderProps {
  children: ReactNode;
  network?: 'ethicalads' | 'adsense';
  config?: Record<string, any>;
}

export const AdProvider = ({ children, network = 'ethicalads', config = {} }: AdProviderProps) => (
  <AdContext.Provider value={{ network, config }}>{children}</AdContext.Provider>
);
