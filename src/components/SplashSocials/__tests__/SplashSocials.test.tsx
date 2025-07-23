import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/__tests__/test-utils';
import { axe } from 'jest-axe';
import SplashSocials from '../SplashSocials';

describe('SplashSocials', () => {
  it('renders without crashing', () => {
    renderWithProviders(<SplashSocials />);
    // Check for the section by aria-label
    expect(screen.getByRole('region', { name: /social media buttons/i })).toBeInTheDocument();
  });

  it('renders all social media links with correct hrefs and accessible names', () => {
    renderWithProviders(<SplashSocials />);
    // Example: update selectors and expected hrefs/names as needed
    const socials = [
      { name: /twitter|x/i, href: /twitter\.com|x\.com/ },
      { name: /linkedin/i, href: /linkedin\.com/ },
      { name: /github/i, href: /github\.com/ },
      // Add more as needed
    ];
    socials.forEach(({ name, href }) => {
      const link = screen.getByRole('link', { name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', expect.stringMatching(href));
    });
  });

  it('renders all social icons with appropriate alt text or aria-labels', () => {
    renderWithProviders(<SplashSocials />);
    // Check for icons by alt text or aria-label, allow multiple matches
    expect(screen.getAllByLabelText(/twitter|x/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/linkedin/i).length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/github/i).length).toBeGreaterThan(0);
    // Add more as needed
  });

  it('has no basic accessibility violations', async () => {
    const { container } = renderWithProviders(<SplashSocials />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
