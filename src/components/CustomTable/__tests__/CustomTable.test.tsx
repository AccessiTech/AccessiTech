import React from 'react';
import { render } from '@testing-library/react';
import { CustomMarkdownTable } from '../CustomTable';

// Helper to create a mock mdast Element node with className
const makeNode = (className?: string | string[]) => ({
  type: 'element' as const,
  tagName: 'table',
  properties: className ? { className } : {},
  children: [],
});

describe('CustomMarkdownTable', () => {
  it('handles className as empty array', () => {
    const { container } = render(
      <CustomMarkdownTable node={makeNode([])}>
        <tbody>
          <tr>
            <td>EmptyArray</td>
          </tr>
        </tbody>
      </CustomMarkdownTable>
    );
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    expect(table?.className).toMatch(/table-bordered/);
    expect(table?.textContent).toContain('EmptyArray');
  });

  it('handles className as non-string/array (number)', () => {
    const node = makeNode() as any;
    node.properties.className = 123;
    const { container } = render(
      <CustomMarkdownTable node={node}>
        <tbody>
          <tr>
            <td>NumberClass</td>
          </tr>
        </tbody>
      </CustomMarkdownTable>
    );
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    expect(table?.className).toMatch(/table-bordered/);
    expect(table?.textContent).toContain('NumberClass');
  });

  it('renders with extra props (id, data-attr)', () => {
    const { container } = render(
      <CustomMarkdownTable
        node={makeNode('table-type-footer')}
        id="my-table"
        data-testid="table-test"
      >
        <tbody>
          <tr>
            <td>Props</td>
          </tr>
        </tbody>
      </CustomMarkdownTable>
    );
    const table = container.querySelector('table');
    expect(table).toHaveAttribute('id', 'my-table');
    expect(table).toHaveAttribute('data-testid', 'table-test');
    expect(table?.textContent).toContain('Props');
  });

  it('renders safely if node prop is missing', () => {
    const { container } = render(
      <CustomMarkdownTable>
        <tbody>
          <tr>
            <td>NoNode</td>
          </tr>
        </tbody>
      </CustomMarkdownTable>
    );
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    expect(table?.textContent).toContain('NoNode');
  });
  it('renders a default table when no type is specified', () => {
    const { container } = render(
      <CustomMarkdownTable node={makeNode()}>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
      </CustomMarkdownTable>
    );
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    // Should not have table-type-default unless className is set
    expect(table?.className).not.toMatch(/table-type-default/);
    expect(table?.className).toMatch(/table-bordered/);
    expect(table?.textContent).toContain('Cell');
  });

  it('renders a footer table when type is footer (string className)', () => {
    const { container } = render(
      <CustomMarkdownTable node={makeNode('table-type-footer')}>
        <tbody>
          <tr>
            <td>Footer</td>
          </tr>
        </tbody>
      </CustomMarkdownTable>
    );
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    expect(table?.className).toMatch(/entry-footer-links-table/);
    expect(table?.textContent).toContain('Footer');
  });

  it('renders a footer table when type is footer (array className)', () => {
    const { container } = render(
      <CustomMarkdownTable node={makeNode(['table-type-footer', 'foo'])}>
        <tbody>
          <tr>
            <td>Footer2</td>
          </tr>
        </tbody>
      </CustomMarkdownTable>
    );
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    expect(table?.className).toMatch(/entry-footer-links-table/);
    expect(table?.className).toMatch(/foo/);
    expect(table?.textContent).toContain('Footer2');
  });

  it('renders a default styled table for unknown type', () => {
    const { container } = render(
      <CustomMarkdownTable node={makeNode('table-type-unknown')}>
        <tbody>
          <tr>
            <td>Unknown</td>
          </tr>
        </tbody>
      </CustomMarkdownTable>
    );
    const table = container.querySelector('table');
    expect(table).toBeInTheDocument();
    expect(table?.className).toMatch(/table-type-unknown/);
    expect(table?.className).toMatch(/table-bordered/);
    expect(table?.textContent).toContain('Unknown');
  });
});
