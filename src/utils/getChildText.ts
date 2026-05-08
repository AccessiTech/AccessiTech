// Move function to a separate file later to resolve fast refresh warning
export const getChildText = (node: any): string => {
  if (!node || !node.children || node.children.length === 0) return '';
  return node.children
    .map((child: any) => {
      if (typeof child === 'string') return child;
      if (child && typeof child === 'object' && 'value' in child) {
        return (child as { value: string }).value;
      }
      if (child && typeof child === 'object' && 'children' in child) {
        return getChildText(child);
      }
      return '';
    })
    .join('');
};
