import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';
import '@testing-library/jest-dom';

// Import reducers from their correct locations
import { fontOptionsSlice } from '../../components/FontOptions/reducer';
import { a11ySlice, a11yInitialState } from '../../store/a11y';
import { blogSlice } from '../../store/blog';

// Create a test store function that resets state each time
function createTestStore() {
  return configureStore({
    reducer: {
      font: fontOptionsSlice.reducer,
      a11y: a11ySlice.reducer,
      blog: blogSlice.reducer,
    },
    preloadedState: {
      a11y: a11yInitialState,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Vitest mock helper
export const mockFunction = vi.fn;

// Custom render function with providers
export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  // Create a fresh store for each test
  const testStore = createTestStore();

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <Provider store={testStore}>
        <Router>{children}</Router>
      </Provider>
    );
  };

  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
    store: testStore,
  };
}

// Accessibility test helper
export async function testAccessibility(ui: React.ReactElement) {
  const { container } = renderWithProviders(ui);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
}

// Keyboard navigation test helper
export async function testKeyboardNavigation(
  ui: React.ReactElement,
  focusableElements: number,
  customAssertions?: (element: HTMLElement) => void
) {
  const user = userEvent.setup();
  renderWithProviders(ui);

  // Test forward tab navigation
  for (let i = 0; i < focusableElements; i++) {
    await user.tab();
    const focusedElement = document.activeElement as HTMLElement;
    expect(focusedElement).not.toBeNull();
    if (customAssertions) {
      customAssertions(focusedElement);
    }
  }

  // Test backward tab navigation
  for (let i = 0; i < focusableElements; i++) {
    await user.keyboard('{Shift>}{Tab}{/Shift}');
    const focusedElement = document.activeElement as HTMLElement;
    expect(focusedElement).not.toBeNull();
    if (customAssertions) {
      customAssertions(focusedElement);
    }
  }
}

// Export types for test utilities
export type RenderWithProvidersReturn = ReturnType<typeof renderWithProviders>;
export type TestStore = ReturnType<typeof createTestStore>;
