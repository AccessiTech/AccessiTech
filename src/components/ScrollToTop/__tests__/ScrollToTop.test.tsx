import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

// Mock react-router-dom so we control useLocation return value
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: vi.fn(),
  };
});

const mockLocation = (pathname: string, hash = '') => {
  vi.mocked(useLocation).mockReturnValue({
    pathname,
    hash,
    search: '',
    state: null,
    key: 'default',
  });
};

describe('ScrollToTop', () => {
  let scrollToSpy: ReturnType<typeof vi.spyOn>;
  let scrollIntoViewSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    scrollIntoViewSpy = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders null — mounts without visible output', () => {
    mockLocation('/');
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <ScrollToTop />
      </MemoryRouter>
    );
    expect(container.firstChild).toBeNull();
  });

  it('calls window.scrollTo on pathname change (no hash)', () => {
    mockLocation('/services');
    render(
      <MemoryRouter initialEntries={['/services']}>
        <ScrollToTop />
      </MemoryRouter>
    );
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('calls window.scrollTo when hash element is not found in DOM', () => {
    mockLocation('/services', '#nonexistent');
    render(
      <MemoryRouter initialEntries={['/services#nonexistent']}>
        <ScrollToTop />
      </MemoryRouter>
    );
    // Element not in DOM → falls back to scrollTo
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('calls scrollIntoView when hash element exists in DOM', () => {
    // Create a target element in the document body
    const el = document.createElement('div');
    el.id = 'consulting';
    el.scrollIntoView = scrollIntoViewSpy;
    document.body.appendChild(el);

    mockLocation('/services', '#consulting');
    render(
      <MemoryRouter initialEntries={['/services#consulting']}>
        <ScrollToTop />
      </MemoryRouter>
    );

    expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(scrollToSpy).not.toHaveBeenCalled();

    document.body.removeChild(el);
  });

  it('does not call scrollIntoView when hash is empty string', () => {
    mockLocation('/contact', '');
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <ScrollToTop />
      </MemoryRouter>
    );
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    expect(scrollIntoViewSpy).not.toHaveBeenCalled();
  });
});
