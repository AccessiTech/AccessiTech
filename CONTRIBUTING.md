# Contributing to AccessiTech

Thank you for considering contributing to AccessiTech! We welcome contributions that help make technology more accessible for everyone.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v20.19.0 or higher
- **Yarn** package manager (v1.22+ recommended)
- **Git** for version control

### Recommended Tools

- A code editor with TypeScript support (VS Code, WebStorm, etc.)
- Screen reader for accessibility testing (NVDA, JAWS, VoiceOver, or Narrator)
- Browser extensions for accessibility testing (axe DevTools, WAVE, Lighthouse)

## Setup Instructions

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/AccessiTech.git
   cd AccessiTech
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   ```

   The application will be available at http://localhost:5173

4. **Verify your setup**

   ```bash
   yarn test
   ```

   All tests should pass before you begin making changes.

## Testing Requirements

AccessiTech maintains high standards for code quality and accessibility. All contributions must meet the following requirements:

### Test Coverage

- **Minimum coverage**: ≥95% line coverage
- **Run tests**: `yarn test`
- **Watch mode**: `yarn test:watch` (recommended during development)
- **Coverage report**: `yarn test:coverage`

Coverage is automatically checked in CI. Pull requests that reduce coverage below 95% will not be merged.

### Accessibility Testing

All UI changes must be tested for accessibility:

1. **Automated testing** — All components must pass `jest-axe` audits (included in test suite)
2. **Keyboard navigation** — Verify all interactive elements are keyboard accessible
3. **Screen reader testing** — Test with at least one screen reader
4. **Color contrast** — Verify WCAG 2.2 AA compliance (4.5:1 for normal text, 3:1 for large text)

See our accessibility testing guides:

- [Accessibility Heuristics Testing Guide](testing/ACCESSIBILITY_HEURISTICS.md)
- [WCAG 2.2 AA Compliance Reference](testing/WCAG_2_2_AA_COMPLIANCE.md)

## Pull Request Workflow

### Branch Naming

Use descriptive branch names following this pattern:

- `feat/description` — New features
- `fix/description` — Bug fixes
- `docs/description` — Documentation updates
- `test/description` — Test improvements
- `refactor/description` — Code refactoring

Examples:

- `feat/keyboard-navigation-menu`
- `fix/screen-reader-heading-order`
- `docs/update-accessibility-statement`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `test`, `refactor`, `style`, `chore`, `perf`

**Examples**:

```
feat(blog): add keyboard shortcuts for navigation
fix(menu): correct focus trap on mobile menu
docs(readme): update installation instructions
test(coverage): expand accessibility test coverage
```

### Pull Request Process

1. **Create a feature branch** from `main`

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Write or update tests** to maintain ≥95% coverage

4. **Format your code**

   ```bash
   yarn format
   ```

5. **Run the test suite**

   ```bash
   yarn test
   ```

6. **Commit your changes** using conventional commit messages

7. **Push to your fork**

   ```bash
   git push origin feat/your-feature-name
   ```

8. **Open a Pull Request** against the `main` branch
   - Fill out the PR template completely
   - Describe accessibility testing performed
   - Include screenshots for UI changes
   - Link to any related issues

9. **Respond to review feedback** — Maintainers may request changes

10. **Celebrate** 🎉 — Thank you for making the web more accessible!

## Development Workflow

### Code Formatting

This project uses Prettier for consistent code formatting:

```bash
# Format all files
yarn format:all

# Check formatting (useful in CI)
yarn format:check
```

Prettier runs automatically on staged files via Husky pre-commit hooks.

### Building for Production

To verify your changes work in production mode:

```bash
yarn build:prod
```

This will:

1. Generate RSS feed and sitemap
2. Build the application with Vite
3. Run the static site generator
4. Output to the `docs/` directory

## Accessibility Standards

AccessiTech is committed to meeting **WCAG 2.2 Level AA** standards. All contributions must:

- Maintain semantic HTML structure
- Include appropriate ARIA labels where needed
- Support full keyboard navigation
- Meet color contrast requirements (4.5:1 minimum)
- Include meaningful alternative text for images
- Support screen reader navigation
- Respect user preferences for reduced motion

For detailed guidance, see:

- [Accessibility Heuristics Testing Guide](testing/ACCESSIBILITY_HEURISTICS.md) — Our 10 accessibility testing heuristics
- [WCAG 2.2 AA Compliance Matrix](testing/WCAG_2_2_AA_COMPLIANCE.md) — Complete Success Criteria coverage

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Questions or Issues?

- **Found a bug?** — [Open an issue](https://github.com/AccessiTech/AccessiTech/issues/new)
- **Have a question?** — Start a [discussion](https://github.com/AccessiTech/AccessiTech/discussions)
- **Accessibility concern?** — We prioritize accessibility issues; please flag them clearly

## License

By contributing to AccessiTech, you agree that your contributions will be licensed under the same license as the project (see [LICENSE](LICENSE)).

---

Thank you for helping make the web more accessible! 🌐♿
