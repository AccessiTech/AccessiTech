import { parseTranslation } from "./..";
import { EN, MESSAGE_1, MESSAGE_4, translations } from "./messages";

describe('@accessitech/i18n-redux-toolkit/helpers', () => {
  it('Parses i18n formatted messages', () => {
    const messages = translations[EN];
    const m1 = parseTranslation(messages[MESSAGE_1]);
    expect(m1).toBe("Hello world!!");
    const m4 = parseTranslation(messages[MESSAGE_4])
    expect(m4).toBe("AccessiTech on LinkedIn");
    const m5 = parseTranslation("some random text");
    expect(m5).toBe(undefined);
  });
});
