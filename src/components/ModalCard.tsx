import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ModalCardProps {
  title: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  link?: string;
  body: string;
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'lg' | 'xl';
  ariaLabelledBy?: string;
}

// Custom markdown link renderer for external links
const markdownComponents = {
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <a href={href}>{children}</a>;
  },
};

/**
 * ModalCard Component
 *
 * Reusable modal wrapper for displaying card content with markdown support.
 * Handles external link rendering with target="_blank" automatically.
 *
 * @param title - Modal title/heading
 * @param titleAs - Optional heading level for title (default: 'h2')
 * @param link - Optional link for the modal subtitle
 * @param body - Markdown string to render in modal body
 * @param isOpen - Whether the modal is visible
 * @param onClose - Callback when modal is closed
 * @param size - Optional modal size (default: 'lg')
 * @param ariaLabelledBy - Optional aria-labelledby id for accessibility
 */
const ModalCard: React.FC<ModalCardProps> = ({
  title,
  titleAs = 'h3',
  body,
  isOpen,
  onClose,
  size = 'lg',
  ariaLabelledBy,
  link,
}) => {
  const modalTitleId = ariaLabelledBy || 'modal-title';

  return (
    <Modal show={isOpen} onHide={onClose} size={size} aria-labelledby={modalTitleId}>
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title id={modalTitleId} as={titleAs}>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {link && (
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2">
              View Source ↗
            </a>
          </p>
        )}
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {body}
        </ReactMarkdown>
      </Modal.Body>
      <Modal.Footer className="bg-secondary">
        <Button variant="outline-dark" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCard;
