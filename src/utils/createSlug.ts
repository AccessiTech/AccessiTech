/* eslint-disable no-misleading-character-class */
/**
 * Creates a URL-safe slug from text by:
 * - Removing all emoji sequences (including variation selectors and ZWJ sequences)
 * - Normalizing punctuation (quotes, apostrophes, periods, em dashes, etc.)
 * - Converting to lowercase
 * - Replacing spaces with hyphens
 * - Removing any remaining unsafe characters
 *
 * @param text - The input text to convert to a slug
 * @returns A URL-safe slug suitable for use as a fragment identifier
 *
 * @example
 * createSlug("Hello World 🎉") // "hello-world"
 * createSlug("Vendor Lock-In? It's Real.") // "vendor-lock-in-its-real"
 * createSlug("AI's Impact—The Reality") // "ais-impact-the-reality"
 */
export const createSlug = (text: string): string => {
  return (
    text
      // Remove all emoji sequences (comprehensive pattern that doesn't match digits)
      // First pass: remove emoji with variation selectors and ZWJ sequences
      .replace(
        /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu,
        ''
      )
      .replace(/[\u200D\u200C\uFE0F\uFE0E]/gu, '') // Zero-width joiners and variation selectors
      // Normalize punctuation that shouldn't be in URLs
      .replace(/['''`]/g, '') // Remove quotes and apostrophes
      .replace(/["""]/g, '') // Remove curly quotes
      .replace(/[.,;:!?]/g, '') // Remove sentence punctuation
      .replace(/[\u2014\u2013-]+/g, '-') // Normalize em dash (U+2014), en dash (U+2013), hyphen to single hyphen
      .replace(/[\s\u00A0]+/g, '-') // Replace whitespace (including non-breaking spaces) with hyphens
      .trim()
      .toLowerCase()
      // Remove any remaining characters that aren't alphanumeric, hyphen, or underscore
      .replace(/[^a-z0-9_-]+/g, '')
      // Collapse multiple consecutive hyphens
      .replace(/-+/g, '-')
      // Remove leading/trailing hyphens
      .replace(/^-|-$/g, '')
  );
};
