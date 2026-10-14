import { render } from '@testing-library/react';
import { AdProvider } from '../AdProvider';
import AdSlot from '../AdSlot';

describe('AdSlot', () => {
  it('renders EthicalAd by default', () => {
    const { getByLabelText } = render(
      <AdProvider>
        <AdSlot placement="top-banner" />
      </AdProvider>
    );
    expect(getByLabelText('Advertisement')).toBeInTheDocument();
  });

  it('renders AdSenseAd when network is adsense', () => {
    const { getByLabelText } = render(
      <AdProvider network="adsense">
        <AdSlot placement="sidebar" />
      </AdProvider>
    );
    expect(getByLabelText('Advertisement')).toBeInTheDocument();
  });
});
