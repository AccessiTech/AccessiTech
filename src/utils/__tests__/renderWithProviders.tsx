import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '../../store/store';

export function renderWithProviders(
  ui: ReactElement,
  {
    route = '/',
    store = configureStore({ reducer: rootReducer }),
    ...renderOptions
  }: { route?: string; store?: any } & RenderOptions = {}
) {
  window.history.pushState({}, 'Test page', route);
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
