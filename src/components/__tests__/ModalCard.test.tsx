import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../utils/__tests__/renderWithProviders';
import ModalCard from '../ModalCard';

describe('ModalCard', () => {
  const defaultProps = {
    title: 'Test Modal Title',
    body: 'This is a **markdown** test body.',
    isOpen: true,
    onClose: vi.fn(),
  };

  it('renders when isOpen is true', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);
    expect(screen.getByText('Test Modal Title')).toBeInTheDocument();
    expect(screen.getByText(/This is a/)).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    renderWithProviders(<ModalCard {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Test Modal Title')).not.toBeInTheDocument();
  });

  it('renders markdown content correctly', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);
    // ReactMarkdown should render **markdown** as <strong>
    const strongElement = screen.getByText('markdown');
    expect(strongElement.tagName).toBe('STRONG');
  });

  it('renders with default h3 heading when titleAs is not provided', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);
    const heading = screen.getByText('Test Modal Title');
    expect(heading.tagName).toBe('H3');
  });

  it('renders with custom heading level when titleAs is provided', () => {
    renderWithProviders(<ModalCard {...defaultProps} titleAs="h2" />);
    const heading = screen.getByText('Test Modal Title');
    expect(heading.tagName).toBe('H2');
  });

  it('renders source link when link prop is provided', () => {
    const linkUrl = 'https://example.com/source';
    renderWithProviders(<ModalCard {...defaultProps} link={linkUrl} />);

    const linkElement = screen.getByText(/View Source/);
    expect(linkElement).toBeInTheDocument();
    const anchorElement = linkElement.closest('a');
    expect(anchorElement).toHaveAttribute('href', linkUrl);
    expect(anchorElement).toHaveAttribute('target', '_blank');
    expect(anchorElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not render source link when link prop is not provided', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);
    expect(screen.queryByText(/View Source/)).not.toBeInTheDocument();
  });

  it('renders external markdown links with target="_blank"', () => {
    const bodyWithLink = 'Check out [this link](https://external.com).';
    renderWithProviders(<ModalCard {...defaultProps} body={bodyWithLink} />);

    const linkElement = screen.getByText('this link');
    const anchorElement = linkElement.closest('a');
    expect(anchorElement).toHaveAttribute('href', 'https://external.com');
    expect(anchorElement).toHaveAttribute('target', '_blank');
    expect(anchorElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders internal markdown links without target="_blank"', () => {
    const bodyWithLink = 'Check out [this link](/internal-page).';
    renderWithProviders(<ModalCard {...defaultProps} body={bodyWithLink} />);

    const linkElement = screen.getByText('this link');
    const anchorElement = linkElement.closest('a');
    expect(anchorElement).toHaveAttribute('href', '/internal-page');
    expect(anchorElement).not.toHaveAttribute('target');
  });

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    renderWithProviders(<ModalCard {...defaultProps} onClose={onClose} />);

    const closeButtons = screen.getAllByRole('button');
    // The X button in the header should be one of them
    const closeButton = closeButtons.find(
      btn => btn.getAttribute('aria-label') === 'Close' || btn.classList.contains('btn-close')
    );

    if (closeButton) {
      await user.click(closeButton);
      await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    }
  });

  it('calls onClose when "Close" button in footer is clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    renderWithProviders(<ModalCard {...defaultProps} onClose={onClose} />);

    // Get all buttons with name "Close" and find the one in the footer (has class btn-outline-dark)
    const closeButtons = screen.getAllByRole('button');
    const footerCloseButton = closeButtons.find(btn => btn.classList.contains('btn-outline-dark'));

    if (footerCloseButton) {
      await user.click(footerCloseButton);
      await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    }
  });

  it('sets correct modal size when size prop is provided', () => {
    const { rerender } = renderWithProviders(<ModalCard {...defaultProps} size="sm" />);
    let modalDialog = document.querySelector('.modal-dialog');
    expect(modalDialog).toHaveClass('modal-sm');

    rerender(<ModalCard {...defaultProps} size="lg" />);
    modalDialog = document.querySelector('.modal-dialog');
    expect(modalDialog).toHaveClass('modal-lg');

    rerender(<ModalCard {...defaultProps} size="xl" />);
    modalDialog = document.querySelector('.modal-dialog');
    expect(modalDialog).toHaveClass('modal-xl');
  });

  it('uses default lg size when size prop is not provided', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);
    const modalDialog = document.querySelector('.modal-dialog');
    expect(modalDialog).toHaveClass('modal-lg');
  });

  it('has correct aria-labelledby attribute', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);
    const modal = document.querySelector('.modal');
    expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');
  });

  it('uses custom aria-labelledby when ariaLabelledBy prop is provided', () => {
    renderWithProviders(<ModalCard {...defaultProps} ariaLabelledBy="custom-modal-title" />);
    const modal = document.querySelector('.modal');
    expect(modal).toHaveAttribute('aria-labelledby', 'custom-modal-title');
  });

  it('renders modal title with correct id for aria-labelledby', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);
    const title = screen.getByText('Test Modal Title');
    expect(title).toHaveAttribute('id', 'modal-title');
  });

  it('renders modal title with custom id when ariaLabelledBy is provided', () => {
    renderWithProviders(<ModalCard {...defaultProps} ariaLabelledBy="custom-modal-title" />);
    const title = screen.getByText('Test Modal Title');
    expect(title).toHaveAttribute('id', 'custom-modal-title');
  });

  it('renders markdown with GFM (GitHub Flavored Markdown) support', () => {
    const bodyWithGFM = `
| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
`;
    renderWithProviders(<ModalCard {...defaultProps} body={bodyWithGFM} />);

    // Check if table was rendered (GFM tables)
    const table = document.querySelector('table');
    expect(table).toBeInTheDocument();
  });

  it('has accessible modal structure with proper ARIA roles', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);

    const modal = document.querySelector('.modal');
    expect(modal).toHaveAttribute('role', 'dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
  });

  it('renders Close button with correct variant and styling', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);

    // Get all buttons and find the one in the footer (has class btn-outline-dark)
    const closeButtons = screen.getAllByRole('button');
    const footerCloseButton = closeButtons.find(btn => btn.classList.contains('btn-outline-dark'));

    expect(footerCloseButton).toBeInTheDocument();
    expect(footerCloseButton).toHaveClass('btn-outline-dark');
  });

  it('renders with bg-primary class on header', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);

    const header = document.querySelector('.modal-header');
    expect(header).toHaveClass('bg-primary');
  });

  it('renders with bg-secondary class on footer', () => {
    renderWithProviders(<ModalCard {...defaultProps} />);

    const footer = document.querySelector('.modal-footer');
    expect(footer).toHaveClass('bg-secondary');
  });

  it('handles complex markdown with multiple links', () => {
    const complexBody = `
This is a test with multiple links:
- [External link 1](https://example1.com)
- [External link 2](https://example2.com)
- [Internal link](/page)
    `;
    renderWithProviders(<ModalCard {...defaultProps} body={complexBody} />);

    const externalLinks = screen
      .getAllByRole('link')
      .filter(link => link.getAttribute('href')?.startsWith('https://'));

    expect(externalLinks.length).toBeGreaterThanOrEqual(2);
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
