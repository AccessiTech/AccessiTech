import React from 'react';
import { Spinner } from 'react-bootstrap';

export const LoadingSpinner: React.FC = () => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}
  >
    <Spinner animation="border" role="status" aria-label="Loading page content">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default LoadingSpinner;
