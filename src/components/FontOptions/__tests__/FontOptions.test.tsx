// Mock debounce to call the function immediately for tests
vi.mock('../helpers', async importOriginal => {
  const actual = await importOriginal();
  return {
    ...(typeof actual === 'object' && actual !== null ? actual : {}),
    debounce: (fn: any) => fn,
  };
});
import { fireEvent, screen } from '@testing-library/react';
import FontOptions from '../FontOptions';
import { renderFontOptionsWithProviders } from '../../../utils/__tests__/test-utils';
import { vi } from 'vitest';

describe('FontOptions', () => {
  it('renders toggle button with correct label', () => {
    renderFontOptionsWithProviders(<FontOptions />);
    const toggleBtn = screen.getByRole('button', { name: /toggle font options menu/i });
    expect(toggleBtn).toBeInTheDocument();
  });

  it('opens the font options form when toggle is clicked', () => {
    const { container } = renderFontOptionsWithProviders(<FontOptions />);
    const toggleBtn = screen.getByRole('button', { name: /toggle font options menu/i });
    fireEvent.click(toggleBtn);
    // Debug output
    // eslint-disable-next-line no-console
    console.log(container.innerHTML);
    expect(screen.getByRole('group', { name: /font options/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/font size range input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/font family select/i)).toBeInTheDocument();
  });

  it('changes font size when range input is changed', async () => {
    renderFontOptionsWithProviders(<FontOptions />);
    fireEvent.click(screen.getByRole('button', { name: /toggle font options menu/i }));
    const range = await screen.findByLabelText(/font size range input/i);
    fireEvent.change(range, { target: { value: '2.0' } });
    expect(range).toHaveValue('2.0');
  });

  it('changes font family when select is changed', () => {
    renderFontOptionsWithProviders(<FontOptions />);
    fireEvent.click(screen.getByRole('button', { name: /toggle font options menu/i }));
    const select = screen.getByLabelText(/font family select/i);
    fireEvent.change(select, { target: { value: 'serif' } });
    expect(select).toHaveValue('serif');
  });

  it('closes the form when Escape is pressed', async () => {
    renderFontOptionsWithProviders(<FontOptions />);
    fireEvent.click(screen.getByRole('button', { name: /toggle font options menu/i }));
    const range = await screen.findByLabelText(/font size range input/i);
    fireEvent.keyDown(range, { key: 'Escape' });
    expect(screen.queryByRole('group', { name: /font options/i })).not.toBeInTheDocument();
  });
});
