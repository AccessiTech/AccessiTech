import { render } from '@testing-library/react';
import AdSenseAd from '../AdSenseAd';

describe('AdSenseAd', () => {
  it('renders with correct placement and accessibility', () => {
    const { getByLabelText, getByText } = render(<AdSenseAd placement="sidebar" />);
    const region = getByLabelText('Advertisement');
    expect(region).toBeInTheDocument();
    expect(region).toHaveClass('ad-slot', 'ad-sidebar');
    expect(getByText('Advertisement')).toBeInTheDocument();
  });
});
