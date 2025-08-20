# Accessibility Workplan: Resolving Axe Issues (`<main>` and `<h1>`)

## Background

Axe-core is reporting two persistent accessibility issues:

1. **Missing `<main>` landmark**
2. **Missing `<h1>` heading**

Both elements are present in the rendered HTML, but axe does not detect them. This is likely due to excessive nesting in layout components (e.g., React-Bootstrap `Row`/`Col`) or other DOM structure issues.

## Current Structure (Summary)

- `<h1>` is rendered in `Header` component, inside a `Col` and `Row`.
- `<main>` is rendered in the `Home` page, inside the main content, but also inside layout components.
- The main app container is a `Container` with class `App`.

## Best Practices

- Landmarks (`<main>`, `<header>`, etc.) and headings (`<h1>`) should be as close to the top of the DOM as possible, not deeply nested in non-semantic layout components.
- Use layout components inside landmarks, not around them.

## Workplan

### 1. Refactor DOM Structure

- Move `<main>` so it is a direct child of the main app container (not inside `Row`/`Col`).
- Move `<h1>` so it is a direct child of `<header>` and `<header>` is also a direct child of the main app container or page.
- Avoid wrapping `<main>` and `<h1>` in multiple layers of `Row`/`Col` or other non-semantic divs.

### 2. Update Components

- Update `Home.tsx` to render `<main>` directly under the main app container.
- Update `Header.tsx` and its usage so `<h1>` is not deeply nested.
- If needed, adjust the layout so that grid components are inside `<main>` and `<header>`, not the other way around.

### 3. Test Accessibility

- Rebuild and restart the preview server.
- Run `yarn axe 'http://localhost:4176' --verbose` to verify that axe now detects both `<main>` and `<h1>`.

### 4. Incremental Styling

- Once axe passes, incrementally re-apply any necessary styling to `<h1>` and `<main>`, ensuring they remain accessible.

### 5. Document Changes

- Document the new structure and rationale in a `docs/accessibility-structure.md` file for future reference.

## Next Steps

1. Refactor the DOM structure as described above.
2. Test with axe after each change.
3. Document the final structure and best practices.

---

_This workplan is based on a review of the current codebase and accessibility best practices for React apps using layout libraries._
