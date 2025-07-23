import { vi } from 'vitest';
import type { MockInstance } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
let dispatchSpy: ReturnType<typeof vi.fn>;
vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...actual,
    useDispatch: () => dispatchSpy,
  };
});
vi.mock('../../../store/store', async () => {
  const actual =
    await vi.importActual<typeof import('../../../store/store')>('../../../store/store');
  return {
    ...actual,
    default: { dispatch: (...args: any[]) => dispatchSpy(...args) },
  };
});
import { renderWithProviders } from '../../../utils/__tests__/renderWithProviders';
import A11Y, { SIMPLIFIED_VIEW, TOGGLE_SIMPLIFIED_VIEW } from '../A11Y';
import { useIsA11yOpen, useIsSimplified } from '../../../store/a11y';
import { useOutsideClick } from '../../../settings/utils';

// Mock store and hooks

vi.mock('../../../store/a11y', async () => {
  const actual = await vi.importActual<typeof import('../../../store/a11y')>('../../../store/a11y');
  return {
    ...actual,
    useIsA11yOpen: vi.fn(),
    useIsSimplified: vi.fn(),
    toggleA11y: vi.fn(() => ({ type: 'TOGGLE_A11Y' })),
    toggleSimplified: vi.fn(() => ({ type: 'TOGGLE_SIMPLIFIED' })),
  };
});
vi.mock('../../../settings/utils', () => ({
  useOutsideClick: vi.fn(() => undefined),
}));

describe('A11Y', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useIsA11yOpen as unknown as MockInstance).mockReturnValue(false);
    (useIsSimplified as unknown as MockInstance).mockReturnValue(false);
    (useOutsideClick as unknown as MockInstance).mockReturnValue(undefined);
    dispatchSpy = vi.fn();
  });

  it('renders the accessibility toggle button', () => {
    renderWithProviders(<A11Y />);
    expect(screen.getByLabelText('Toggle Accessibility Options')).toBeInTheDocument();
  });

  it('opens the settings menu when toggle is clicked', () => {
    // First render: menu closed
    (useIsA11yOpen as unknown as MockInstance).mockReturnValue(false);
    renderWithProviders(<A11Y />);
    const toggle = screen.getByLabelText('Toggle Accessibility Options');
    fireEvent.click(toggle);
    expect(dispatchSpy).toHaveBeenCalledWith(expect.objectContaining({ type: 'TOGGLE_A11Y' }));
    // Second render: menu open
    (useIsA11yOpen as unknown as MockInstance).mockReturnValue(true);
    renderWithProviders(<A11Y />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByLabelText('Close Accessibility Options')).toBeInTheDocument();
  });

  it('closes the settings menu when close button is clicked', () => {
    (useIsA11yOpen as unknown as MockInstance).mockReturnValue(true);
    renderWithProviders(<A11Y />);
    const close = screen.getByLabelText('Close Accessibility Options');
    fireEvent.click(close);
    expect(dispatchSpy).toHaveBeenCalledWith(expect.objectContaining({ type: 'TOGGLE_A11Y' }));
  });

  it('toggles simplified view when simplified button is clicked', () => {
    (useIsA11yOpen as unknown as MockInstance).mockReturnValue(true);
    renderWithProviders(<A11Y />);
    const simplified = screen.getByLabelText(TOGGLE_SIMPLIFIED_VIEW);
    fireEvent.click(simplified);
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'TOGGLE_SIMPLIFIED' })
    );
  });

  it('adds and removes SIMPLIFIED_VIEW class on body when toggling simplified view', () => {
    const body = document.body;
    body.classList.remove(SIMPLIFIED_VIEW);
    (useIsSimplified as unknown as MockInstance).mockReturnValueOnce(true);
    renderWithProviders(<A11Y />);
    expect(body.classList.contains(SIMPLIFIED_VIEW)).toBe(true);
    (useIsSimplified as unknown as MockInstance).mockReturnValueOnce(false);
    renderWithProviders(<A11Y />);
    expect(body.classList.contains(SIMPLIFIED_VIEW)).toBe(false);
  });

  it('closes menu on Escape key', () => {
    (useIsA11yOpen as unknown as MockInstance).mockReturnValue(true);
    renderWithProviders(<A11Y />);
    const toggle = screen.getByLabelText('Toggle Accessibility Options');
    fireEvent.keyDown(toggle, { key: 'Escape' });
    expect(dispatchSpy).toHaveBeenCalledWith(expect.objectContaining({ type: 'TOGGLE_A11Y' }));
  });

  it('closes menu on outside click', () => {
    (useIsA11yOpen as unknown as MockInstance).mockReturnValue(true);
    let outsideClickCallback: (() => void) | undefined;
    (useOutsideClick as unknown as MockInstance).mockImplementation((_ref, cb) => {
      outsideClickCallback = cb;
      return undefined;
    });
    renderWithProviders(<A11Y />);
    // Simulate outside click by calling the callback directly
    if (outsideClickCallback) outsideClickCallback();
    expect(dispatchSpy).toHaveBeenCalledWith(expect.objectContaining({ type: 'TOGGLE_A11Y' }));
  });
});
