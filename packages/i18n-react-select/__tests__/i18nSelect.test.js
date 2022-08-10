import React from 'react';
import { render } from '@testing-library/react';
import {
  EN,
  namespace,
  I18nSelect,
} from '../src/i18nSelect';

describe('@accessitech/i18n-react-select', () => {
  it('Is defined', () => {

    expect(EN).not.toBe(undefined);
    expect(namespace).not.toBe(undefined);
    expect(I18nSelect).not.toBe(undefined);
  });

  it('Mounts without crashing', () => {
    const { container } = render(
      <I18nSelect
        currentLang={EN}
        languageKeys={[EN]}
        displayStrings={{ [EN]: 'En' }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
