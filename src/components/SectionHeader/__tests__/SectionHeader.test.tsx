import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import SectionHeader from '../SectionHeader';

// Mock FaLink to avoid SVG noise
vi.mock('react-icons/fa', () => ({ FaLink: () => <span data-testid="fa-link" /> }));

describe('SectionHeader', () => {
  it('renders all heading levels (h1-h6) and default (h3)', () => {
    const { rerender } = render(<SectionHeader title="Head1" id="id1" use="h1" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Head1');
    rerender(<SectionHeader title="Head2" id="id2" use="h2" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Head2');
    rerender(<SectionHeader title="Head3" id="id3" use="h3" />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Head3');
    rerender(<SectionHeader title="Head4" id="id4" use="h4" />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Head4');
    rerender(<SectionHeader title="Head5" id="id5" use="h5" />);
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Head5');
    rerender(<SectionHeader title="Head6" id="id6" use="h6" />);
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Head6');
    // Unknown/invalid use falls back to h3
    rerender(<SectionHeader title="Unknown" id="id7" use={'not-a-header' as any} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Unknown');
  });

  it('clipboard fallback: textArea fallback works and cleans up', async () => {
    Object.assign(navigator, { clipboard: undefined });
    // Spy on document.createElement and body.appendChild/removeChild
    const appendSpy = vi.spyOn(document.body, 'appendChild');
    const removeSpy = vi.spyOn(document.body, 'removeChild');
    // execCommand returns true (success)
    document.execCommand = vi.fn(() => true);
    render(<SectionHeader title="Fallback" id="fallback" />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('Copied!')).toBeInTheDocument());
    expect(document.execCommand).toHaveBeenCalledWith('copy');
    expect(appendSpy).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalled();
    appendSpy.mockRestore();
    removeSpy.mockRestore();
  });

  it('clipboard fallback: textArea fallback triggers fail on error', async () => {
    Object.assign(navigator, { clipboard: undefined });
    // execCommand throws
    document.execCommand = vi.fn(() => {
      throw new Error('fail');
    });
    // Spy on document.createElement and body.appendChild/removeChild
    const appendSpy = vi.spyOn(document.body, 'appendChild');
    const removeSpy = vi.spyOn(document.body, 'removeChild');
    render(<SectionHeader title="Fail" id="fail" failText="NoCopy" />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('NoCopy')).toBeInTheDocument());
    expect(document.execCommand).toHaveBeenCalledWith('copy');
    expect(appendSpy).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalled();
    appendSpy.mockRestore();
    removeSpy.mockRestore();
  });
  it('renders with default props (no use/linkTitle/successText/failText)', () => {
    render(<SectionHeader title="Default Title" id="default-id" />);
    // Should render h3 by default
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Default Title');
    // Button should have default title
    expect(screen.getByRole('button', { name: /click to copy link/i })).toBeInTheDocument();
  });

  it('renders gracefully with empty title and id', () => {
    render(<SectionHeader title="" id="" />);
    // Should render h3 with empty text
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('');
    // Anchor should have href="#"
    expect(screen.getByRole('link')).toHaveAttribute('href', '#');
  });

  it('renders with custom linkTitle, successText, and failText', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(
      <SectionHeader
        title="Custom"
        id="custom-id"
        linkTitle="Custom Link Title"
        successText="Custom Success!"
        failText="Custom Fail!"
      />
    );
    // Button should have custom title
    const button = screen.getByRole('button', { name: /custom link title/i });
    expect(button).toBeInTheDocument();
    // Success message
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByText('Custom Success!')).toBeInTheDocument());
    expect(writeText).toHaveBeenCalled();
  });

  it('shows fail message with custom failText if fallback fails', async () => {
    Object.assign(navigator, { clipboard: undefined });
    document.execCommand = vi.fn(() => {
      throw new Error('fail');
    });
    render(<SectionHeader title="CustomFail" id="fail-id" failText="CustomFailText" />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('CustomFailText')).toBeInTheDocument());
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('handles rapid button clicks (success/fail state resets)', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(<SectionHeader title="Rapid" id="rapid-id" successText="Yay!" />);
    const button = screen.getByRole('button');
    // Click multiple times
    fireEvent.click(button);
    fireEvent.click(button);
    await waitFor(() => expect(screen.getByText('Yay!')).toBeInTheDocument());
    expect(writeText).toHaveBeenCalledTimes(2);
  });
  it('renders the correct heading level based on the use prop', () => {
    const { rerender } = render(<SectionHeader title="Test Title" id="test-id" use="h1" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title');
    rerender(<SectionHeader title="Test Title" id="test-id" use="h2" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Title');
    rerender(<SectionHeader title="Test Title" id="test-id" use="h3" />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Title');
    rerender(<SectionHeader title="Test Title" id="test-id" use="h4" />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Test Title');
    rerender(<SectionHeader title="Test Title" id="test-id" use="h5" />);
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Test Title');
    rerender(<SectionHeader title="Test Title" id="test-id" use="h6" />);
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Test Title');
  });

  it('renders a link and button with correct attributes', () => {
    render(<SectionHeader title="Test Title" id="test-id" use="h2" linkTitle="Copy Link" />);
    const anchor = screen.getByRole('link', { name: /test title/i });
    expect(anchor).toHaveAttribute('href', '#test-id');
    const button = screen.getByRole('button', { name: /copy link/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('fa-link')).toBeInTheDocument();
  });

  it('shows success message when copy succeeds (modern clipboard)', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(<SectionHeader title="Copy Success" id="copy-id" use="h2" successText="Yay!" />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('Yay!')).toBeInTheDocument());
    expect(writeText).toHaveBeenCalled();
  });

  it('shows fail message when copy fails (fallback)', async () => {
    // Remove clipboard API
    Object.assign(navigator, { clipboard: undefined });
    // Mock execCommand to throw
    document.execCommand = vi.fn(() => {
      throw new Error('fail');
    });
    render(<SectionHeader title="Copy Fail" id="fail-id" use="h2" failText="Nope!" />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('Nope!')).toBeInTheDocument());
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('shows success message when fallback copy works', async () => {
    Object.assign(navigator, { clipboard: undefined });
    document.execCommand = vi.fn(() => true);
    render(
      <SectionHeader
        title="Copy Fallback"
        id="fallback-id"
        use="h2"
        successText="Fallback Success!"
      />
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText('Fallback Success!')).toBeInTheDocument());
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
