import { render } from '@testing-library/react';
import EthicalAd from '../EthicalAd';

describe('EthicalAd', () => {
  it('renders with correct placement and accessibility', () => {
    const { getByLabelText, getByText } = render(<EthicalAd placement="footer" />);
    const region = getByLabelText('Advertisement');
    expect(region).toBeInTheDocument();
    expect(region).toHaveClass('ad-slot', 'ad-footer');
    expect(getByText('Advertisement')).toBeInTheDocument();
  });
});
