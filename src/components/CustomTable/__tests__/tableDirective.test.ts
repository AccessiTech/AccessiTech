import { tableDirective } from '../CustomTable';
import type { Root } from 'mdast';

describe('tableDirective plugin', () => {
  it('adds table-type class from attribute', () => {
    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'containerDirective',
          name: 'table',
          attributes: { type: 'footer' },
          children: [{ type: 'table', children: [], data: { hProperties: {} } }],
        } as any,
      ],
    };
    tableDirective()(tree as any, undefined as any, undefined as any);
    const table = tree.children[0] as any;
    expect(table.type).toBe('table');
    expect(table.data?.hProperties?.className).toContain('table-type-footer');
  });

  it('extracts type from paragraph child', () => {
    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'containerDirective',
          name: 'table',
          children: [
            { type: 'paragraph', children: [{ type: 'text', value: 'type=footer' }] },
            { type: 'table', children: [], data: { hProperties: {} } },
          ],
        } as any,
      ],
    };
    tableDirective()(tree as any, undefined as any, undefined as any);
    const table = tree.children[0] as any;
    expect(table.type).toBe('table');
    expect(table.data?.hProperties?.className).toContain('table-type-footer');
  });

  it('removes directive node if no table found', () => {
    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'containerDirective',
          name: 'table',
          children: [{ type: 'paragraph', children: [{ type: 'text', value: 'type=footer' }] }],
        } as any,
      ],
    };
    tableDirective()(tree as any, undefined as any, undefined as any);
    expect(tree.children.length).toBe(0);
  });

  it('deep clones the table node', () => {
    const tableNode = { type: 'table', children: [], data: { hProperties: {} } };
    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'containerDirective',
          name: 'table',
          attributes: { type: 'footer' },
          children: [tableNode],
        } as any,
      ],
    };
    tableDirective()(tree as any, undefined as any, undefined as any);
    expect(tree.children[0]).not.toBe(tableNode); // Should be a clone
  });
});
