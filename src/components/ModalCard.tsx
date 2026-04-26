import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ModalCardProps {
  title: string;
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
 * @param body - Markdown string to render in modal body
 * @param isOpen - Whether the modal is visible
 * @param onClose - Callback when modal is closed
 * @param size - Optional modal size (default: 'lg')
 * @param ariaLabelledBy - Optional aria-labelledby id for accessibility
 */
const ModalCard: React.FC<ModalCardProps> = ({
  title,
  body,
  isOpen,
  onClose,
  size = 'lg',
  ariaLabelledBy,
}) => {
  const modalTitleId = ariaLabelledBy || 'modal-title';

  return (
    <Modal show={isOpen} onHide={onClose} size={size} aria-labelledby={modalTitleId}>
      <Modal.Header closeButton>
        <Modal.Title id={modalTitleId}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {body}
        </ReactMarkdown>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCard;
