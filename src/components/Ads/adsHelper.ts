import { createContext, useContext } from 'react';

import type { AdContextType } from './AdProvider';

export const AdContext = createContext<AdContextType>({
  network: 'ethicalads',
  config: {},
});

export const useAdContext = () => useContext(AdContext);
