import { describe, expect, it } from 'vitest';
import { parseMetaData } from '../parseMetaData';

describe('parseMetaData', () => {
  it('reads comment metadata without losing colons in values', () => {
    expect(
      parseMetaData(`<!--
title: Accessibility Statement
description: Accessibility: our commitment
url: https://www.accessi.tech/disclosures/accessibility
-->
# Content`)
    ).toEqual({
      title: 'Accessibility Statement',
      description: 'Accessibility: our commitment',
      url: 'https://www.accessi.tech/disclosures/accessibility',
    });
  });

  it.each(['# No metadata', '<!-- unclosed', 'title: Outside a comment'])(
    'returns no metadata for %s',
    content => {
      expect(parseMetaData(content)).toEqual({});
    }
  );
});
