import { vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../utils/__tests__/renderWithProviders';
import A11Y, { SIMPLIFIED_VIEW, TOGGLE_SIMPLIFIED_VIEW } from './A11Y';

// Mock store and hooks

vi.mock('../../store/a11y', async () => {
  const actual = await vi.importActual<any>('../../store/a11y');
  return {
    ...actual,
    useIsA11yOpen: vi.fn(),
    useIsSimplified: vi.fn(),
    toggleA11y: vi.fn(() => ({ type: 'TOGGLE_A11Y' })),
    toggleSimplified: vi.fn(() => ({ type: 'TOGGLE_SIMPLIFIED' })),
  };
});
vi.mock('../../store/store', async () => {
  const actual = await vi.importActual<any>('../../store/store');
  return {
    ...actual,
    default: { dispatch: vi.fn() },
  };
});
vi.mock('../../settings/utils', () => ({
  useOutsideClick: vi.fn(() => undefined),
}));

import {
  useIsA11yOpen as _useIsA11yOpen,
  useIsSimplified as _useIsSimplified,
  toggleA11y,
  toggleSimplified,
} from '../../store/a11y';
import store from '../../store/store';
import { useOutsideClick as _useOutsideClick } from '../../settings/utils';

// Cast hooks to mocked functions for testing
const useIsA11yOpen = _useIsA11yOpen as jest.Mock;
const useIsSimplified = _useIsSimplified as jest.Mock;
const useOutsideClick = _useOutsideClick as jest.Mock;

describe('A11Y', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useIsA11yOpen.mockReturnValue(false);
    useIsSimplified.mockReturnValue(false);
    useOutsideClick.mockReturnValue(undefined);
  });

  it('renders the accessibility toggle button', () => {
    renderWithProviders(<A11Y />);
    expect(screen.getByLabelText('Toggle Accessibility Options')).toBeInTheDocument();
  });

  it('opens the settings menu when toggle is clicked', () => {
    // First render: menu closed
    useIsA11yOpen.mockReturnValue(false);
    const { rerender } = renderWithProviders(<A11Y />);
    const toggle = screen.getByLabelText('Toggle Accessibility Options');
    fireEvent.click(toggle);
    expect(store.dispatch).toHaveBeenCalledWith(toggleA11y());
    // Second render: menu open
    useIsA11yOpen.mockReturnValue(true);
    rerender(<A11Y />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByLabelText('Close Accessibility Options')).toBeInTheDocument();
  });

  it('closes the settings menu when close button is clicked', () => {
    useIsA11yOpen.mockReturnValue(true);
    renderWithProviders(<A11Y />);
    const close = screen.getByLabelText('Close Accessibility Options');
    fireEvent.click(close);
    expect(store.dispatch).toHaveBeenCalledWith(toggleA11y());
  });

  it('toggles simplified view when simplified button is clicked', () => {
    useIsA11yOpen.mockReturnValue(true);
    renderWithProviders(<A11Y />);
    const simplified = screen.getByLabelText(TOGGLE_SIMPLIFIED_VIEW);
    fireEvent.click(simplified);
    expect(store.dispatch).toHaveBeenCalledWith(toggleSimplified());
  });

  it('adds and removes SIMPLIFIED_VIEW class on body when toggling simplified view', () => {
    const body = document.body;
    body.classList.remove(SIMPLIFIED_VIEW);
    useIsSimplified.mockReturnValueOnce(true);
    renderWithProviders(<A11Y />);
    expect(body.classList.contains(SIMPLIFIED_VIEW)).toBe(true);
    useIsSimplified.mockReturnValueOnce(false);
    renderWithProviders(<A11Y />);
    expect(body.classList.contains(SIMPLIFIED_VIEW)).toBe(false);
  });

  it('closes menu on Escape key', () => {
    useIsA11yOpen.mockReturnValue(true);
    renderWithProviders(<A11Y />);
    const toggle = screen.getByLabelText('Toggle Accessibility Options');
    fireEvent.keyDown(toggle, { key: 'Escape' });
    expect(store.dispatch).toHaveBeenCalledWith(toggleA11y());
  });

  it('closes menu on outside click', () => {
    useIsA11yOpen.mockReturnValue(true);
    // Mock useOutsideClick to immediately call the callback (second argument)
    useOutsideClick.mockImplementation((_ref, callback) => {
      callback();
      return undefined;
    });
    renderWithProviders(<A11Y />);
    expect(store.dispatch).toHaveBeenCalledWith(toggleA11y());
  });
});
