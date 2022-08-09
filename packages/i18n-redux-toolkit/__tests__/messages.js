export const MESSAGE_1 = 'MESSAGE_1';
export const MESSAGE_2 = 'MESSAGE_2';
export const MESSAGE_3 = 'MESSAGE_3';
export const MESSAGE_4 = 'MESSAGE_4';
export const EN = 'en';
export const FR = 'fr';

export const translations = {
  [EN]: {
    [MESSAGE_1]: {
      "message": "Hello world!!"
    },
    [MESSAGE_2]: {
      "message": "You ever wonder why we're here?"
    },
    [MESSAGE_3]: {
      "message": "It's one of life's great mysteries isn't it? Why are we here? I mean, are we the product of some cosmic coincidence, or is there really a God watching everything? You know, with a plan for us and stuff. I don't know, man, but it keeps me up at night."
    },
    [MESSAGE_4]: {
      "message": "$AccessiTech$ on $LinkedIn$",
      "description": "Splash Socials: label for LinkedIn button",
      "placeholders": {
        "AccessiTech": {
          "content": "AccessiTech"
        },
        "LinkedIn": {
          "content": "LinkedIn"
        }
      }
    },
  },
  [FR]: {}
}

export const translatedMessages = {
  'en': {
    [MESSAGE_1]: "Hello world!!",
    [MESSAGE_2]: "You ever wonder why we're here?",
    [MESSAGE_3]: "It's one of life's great mysteries isn't it? Why are we here? I mean, are we the product of some cosmic coincidence, or is there really a God watching everything? You know, with a plan for us and stuff. I don't know, man, but it keeps me up at night.",
    [MESSAGE_4]: "AccessiTech on LinkedIn",
  },
  'fr': {}
}

describe('Test data', () => {
  it('Should be defined', () => {
    expect(MESSAGE_1).not.toBe(undefined);
    expect(MESSAGE_2).not.toBe(undefined);
    expect(MESSAGE_3).not.toBe(undefined);
    expect(MESSAGE_4).not.toBe(undefined);
    expect(translations).not.toBe(undefined);
    expect(translatedMessages).not.toBe(undefined);
  });
});