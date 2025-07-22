import { JSX } from 'react';
import { ExtraProps } from 'react-markdown';
import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';

// Move to a separate file later to resolve fast refresh warning
// Plugin to support custom table directives in markdown, e.g. :::table[type=footer] ... :::
export const tableDirective: Plugin<[], Root> = () => (tree: Root) => {
  // Traverse the markdown AST
  visit(tree, (node: any, index, parent) => {
    // Look for a containerDirective node named 'table'
    if (
      node.type === 'containerDirective' &&
      node.name === 'table' &&
      parent &&
      typeof index === 'number'
    ) {
      // Try to get the table type from the directive's attributes (e.g. :::table[type=footer])
      let tableType = node.attributes?.type;
      // Find the first child table node inside the directive
      let tableNode = node.children.find((n: any) => n.type === 'table');
      // If no attribute, try to extract type from a paragraph child (e.g. 'type=footer')
      if (!tableType) {
        const paraIdx = node.children.findIndex((n: any) => n.type === 'paragraph');
        if (paraIdx !== -1) {
          const para = node.children[paraIdx];
          if (para.children && para.children.length === 1 && para.children[0].type === 'text') {
            const match = para.children[0].value.match(/^type=(\w+)$/);
            if (match) {
              tableType = match[1];
              // Remove the paragraph node so it doesn't render
              node.children.splice(paraIdx, 1);
              // Re-find the table node in case indices changed
              tableNode = node.children.find((n: any) => n.type === 'table');
            }
          }
        }
      }
      if (tableNode) {
        // Encode the tableType as a className for reliable access in React
        const typeClass = tableType ? `table-type-${tableType}` : 'table-type-default';
        tableNode.data = tableNode.data || {};
        tableNode.data.hProperties = tableNode.data.hProperties || {};
        tableNode.data.hProperties.className = [
          ...(tableNode.data.hProperties.className || []),
          typeClass,
        ];
        // Deep clone the table node to avoid mutating the original AST
        parent.children[index] = JSON.parse(JSON.stringify(tableNode));
      } else {
        // If no table found, remove the directive node
        parent.children.splice(index, 1);
      }
    }
  });
};

// TableProps extends the default table props and react-markdown's ExtraProps
export type TableProps = JSX.IntrinsicElements['table'] & ExtraProps;

// CustomMarkdownTable renders a table with a class based on the tableType
export const CustomMarkdownTable = ({ children, node, ...props }: TableProps) => {
  // Extract tableType from the className property (set by the plugin)
  const className = (node as any)?.properties?.className || '';
  const match =
    typeof className === 'string'
      ? className.match(/table-type-(\w+)/)
      : Array.isArray(className)
        ? className.join(' ').match(/table-type-(\w+)/)
        : null;
  const tableType = match ? match[1] : 'default';
  // Render a special footer table if type is 'footer'
  if (tableType === 'footer') {
    const tableProps = {
      ...props,
      className: `entry-footer-links-table ${className}`,
    };
    return <table {...tableProps}>{children}</table>;
  }
  // Otherwise, render a default styled table
  return (
    <table className={`table table-striped table-bordered table-hover ${className}`} {...props}>
      {children}
    </table>
  );
};

export default CustomMarkdownTable;
