export const parseMetaData = (text: string): Record<string, string> => {
  const startIndex = text.indexOf('<!--');
  const endIndex = text.indexOf('-->');
  if (startIndex === -1 || endIndex === -1) return {};

  const metaData: Record<string, string> = {};
  const lines = text.substring(startIndex + 4, endIndex).split('\n');
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      if (key && value) metaData[key] = value;
    }
  });
  return metaData;
};
