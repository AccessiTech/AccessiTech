// __mocks__/Metadata.tsx
import React from 'react';

// Debug: log when the mock is used and what props are passed
// eslint-disable-next-line no-console
export default function MockMetadata(props: any) {
  console.log('MOCK Metadata used', props);
  return <div data-testid="metadata" />;
}
