import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { App, AppProps } from '../App';
import { APP_ROOT } from '../../pages/Home/Home';

// Mock the child components
vi.mock('../../pages/Home/Home', () => ({
  Home: () => <div data-testid="mock-home">Home Page</div>,
  APP_ROOT: 'AccessiTech Application',
}));

vi.mock('../../pages/Blog/Blog', () => ({
  default: ({ hideExcerpt, hideDates, hideDescription }: any) => (
    <div
      data-testid="mock-blog"
      data-hide-excerpt={hideExcerpt}
      data-hide-dates={hideDates}
      data-hide-description={hideDescription}
    >
      Blog Page
    </div>
  ),
}));

vi.mock('../../pages/BlogEntry/BlogEntry', () => ({
  default: () => <div data-testid="mock-blog-entry">Blog Entry Page</div>,
}));

vi.mock('../../pages/404/404', () => ({
  default: () => <div data-testid="mock-404">404 Page</div>,
}));

vi.mock('../../components/Footer/Footer', () => ({
  default: () => <div data-testid="mock-footer">Footer Component</div>,
}));

vi.mock('../../components/Metadata/Metadata', () => ({
  default: (props: any) => <div data-testid="mock-metadata">{JSON.stringify(props)}</div>,
}));

vi.mock('../../settings/getMetaData', () => ({
  getMetaData: vi.fn(data => ({ ...data, processed: true })),
}));

describe('App Component', () => {
  const renderApp = (props?: AppProps) => {
    return render(<App {...props} />);
  };

  it('renders with the correct aria-label', () => {
    renderApp();
    const appContainer = screen.getByLabelText(APP_ROOT);
    expect(appContainer).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    renderApp();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

  it('renders Metadata when using BrowserRouter (no path prop)', () => {
    renderApp();
    expect(screen.getByTestId('mock-metadata')).toBeInTheDocument();
  });

  it('does not render Metadata when using StaticRouter (with path prop)', () => {
    renderApp({ path: '/' });
    expect(screen.queryByTestId('mock-metadata')).not.toBeInTheDocument();
  });

  describe('Routing', () => {
    it('renders Home component for root path', () => {
      renderApp({ path: '/' });
      expect(screen.getByTestId('mock-home')).toBeInTheDocument();
    });

    it('renders Home component for /index.html', () => {
      renderApp({ path: '/index.html' });
      expect(screen.getByTestId('mock-home')).toBeInTheDocument();
    });

    it('renders Blog component for /blog path with correct props', () => {
      renderApp({ path: '/blog' });
      const blogComponent = screen.getByTestId('mock-blog');
      expect(blogComponent).toBeInTheDocument();
      expect(blogComponent.getAttribute('data-hide-excerpt')).toBe('true');
    });

    it('renders Blog component for /wcag path with correct props', () => {
      renderApp({ path: '/wcag' });
      const blogComponent = screen.getByTestId('mock-blog');
      expect(blogComponent).toBeInTheDocument();
      expect(blogComponent.getAttribute('data-hide-dates')).toBe('true');
      expect(blogComponent.getAttribute('data-hide-description')).toBe('true');
    });

    it('renders BlogEntry component for blog/:id path', () => {
      renderApp({ path: '/blog/test-entry' });
      expect(screen.getByTestId('mock-blog-entry')).toBeInTheDocument();
    });

    it('renders BlogEntry component for wcag/:id path', () => {
      renderApp({ path: '/wcag/test-entry' });
      expect(screen.getByTestId('mock-blog-entry')).toBeInTheDocument();
    });

    it('renders 404 component for unknown paths', () => {
      renderApp({ path: '/unknown-path' });
      expect(screen.getByTestId('mock-404')).toBeInTheDocument();
    });
  });
});
