import { Button } from 'react-bootstrap';

export interface CalendlyButtonProps {
  label?: string;
  variant?: string;
  size?: 'sm' | 'lg';
  className?: string;
}

export const CALENDLY_URL =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CALENDLY_URL) ||
  'https://calendly.com/accessit3ch/30min';

export const CalendlyButton = ({
  label = 'Schedule a Discovery Call',
  variant = 'primary',
  size,
  className,
}: CalendlyButtonProps) => {
  return (
    <Button
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      aria-label={`${label} (opens in new tab)`}
      data-testid="calendly-button"
    >
      {label}
    </Button>
  );
};

export default CalendlyButton;
