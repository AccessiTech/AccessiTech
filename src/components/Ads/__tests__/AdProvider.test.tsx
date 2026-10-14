import { render } from '@testing-library/react';
import { AdProvider } from '../AdProvider';
import { useAdContext } from '../adsHelper';

const TestComponent = () => {
  const { network, config } = useAdContext();
  return (
    <div>
      <span data-testid="network">{network}</span>
      <span data-testid="config">{JSON.stringify(config)}</span>
    </div>
  );
};

describe('AdProvider', () => {
  it('provides default context', () => {
    const { getByTestId } = render(
      <AdProvider>
        <TestComponent />
      </AdProvider>
    );
    expect(getByTestId('network').textContent).toBe('ethicalads');
    expect(getByTestId('config').textContent).toBe('{}');
  });

  it('provides custom context', () => {
    const { getByTestId } = render(
      <AdProvider network="adsense" config={{ foo: 'bar' }}>
        <TestComponent />
      </AdProvider>
    );
    expect(getByTestId('network').textContent).toBe('adsense');
    expect(getByTestId('config').textContent).toBe('{"foo":"bar"}');
  });
});
