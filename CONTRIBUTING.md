# Contributing to AccessiTech

First off, thank you for considering contributing to AccessiTech! It's people like you that make AccessiTech such a great tool for everyone.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand what behavior is expected in our community.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for AccessiTech. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [the issue list](https://github.com/AccessiTech/AccessiTech/issues) as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as much detail as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for AccessiTech, including completely new features and minor improvements to existing functionality.

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as much detail as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of AccessiTech which the suggestion is related to.
* **Explain why this enhancement would be useful** to most AccessiTech users.

### Pull Requests

The process described here has several goals:

- Maintain AccessiTech's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible AccessiTech
- Enable a sustainable system for AccessiTech's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow the [styleguides](#styleguides)
2. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Setting Up the Development Environment

To set up the development environment, please follow these steps:

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/AccessiTech.git
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

4. **Open your browser** to http://localhost:5173

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🔧 `:wrench:` when updating configuration files
    * 📝 `:memo:` when writing docs
    * 🐛 `:bug:` when fixing a bug
    * ✨ `:sparkles:` when adding a new feature
    * ♿ `:wheelchair:` when improving accessibility
    * 🎨 `:art:` when improving the UI
    * ⚡ `:zap:` when improving performance
    * 🧪 `:test_tube:` when adding tests

### JavaScript/TypeScript Styleguide

All JavaScript/TypeScript code is linted with [ESLint](https://eslint.org/) and formatted with [Prettier](https://prettier.io/).

* Prefer TypeScript over JavaScript
* Use ES6+ features where appropriate
* Use functional components with hooks for React
* Follow the [React Hooks rules](https://reactjs.org/docs/hooks-rules.html)
* Import statements should be ordered as follows:
  * React/external libraries
  * Internal modules/components
  * Styles/assets

### CSS/SCSS Styleguide

* Use SCSS for styling
* Follow the BEM (Block, Element, Modifier) naming convention
* Keep your selectors as shallow as possible
* Avoid using !important

### Documentation Styleguide

* Use [Markdown](https://daringfireball.net/projects/markdown) for documentation
* Keep READMEs updated as code changes
* Comment your code where necessary
* Document complex functions and components with JSDoc comments

### Accessibility Guidelines

When contributing code that affects the user interface:

* Ensure WCAG 2.1 Level AA compliance
* Test with keyboard navigation
* Test with major screen readers (NVDA, VoiceOver, JAWS)
* Maintain color contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)
* Include appropriate ARIA labels and roles
* Add alt text for images and icons
* Ensure focus management for interactive elements
* Support text resizing up to 200%
* Respect user preferences (reduced motion, color scheme, etc.)
* Document accessibility features in component documentation
* Include accessibility testing steps in pull request descriptions

For detailed accessibility requirements, refer to our [Accessibility Statement](ACCESSIBILITY.md).

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues related to unintended behavior or errors
* `documentation` - Issues related to improving documentation
* `enhancement` - Issues related to new features or improvements
* `good first issue` - Issues that are good for newcomers
* `help wanted` - Issues where we're looking for help from the community
* `accessibility` - Issues related to accessibility improvements
* `UI` - Issues related to the user interface
* `UX` - Issues related to the user experience
* `testing` - Issues related to testing
* `dependencies` - Issues related to dependencies

## Attribution

This Contributing guide is adapted from the [Atom Contributing guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).
