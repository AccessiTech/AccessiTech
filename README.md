# AccessiTech

![Coverage](https://img.shields.io/badge/coverage-92%25-brightgreen)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.3.4-purple.svg)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-latest-green.svg)](https://vitest.dev/)
[![Prettier](https://img.shields.io/badge/Prettier-3.2.5-ff69b4.svg)](https://prettier.io/)
[![License](https://img.shields.io/github/license/AccessiTech/AccessiTech.svg)](LICENSE)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG_2.1-AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Faccessitech.github.io%2FAccessiTech%2F)](https://accessitech.github.io/AccessiTech/)
[![Last Update](https://img.shields.io/github/last-commit/AccessiTech/AccessiTech.svg)](https://github.com/AccessiTech/AccessiTech/commits/main)

This repository hosts the AccessiTech homepage website, built with modern web technologies to provide an accessible and responsive user experience.

## The Why

AccessiTech believes access to technology is a human right, particularly when such technology promotes, protects, and/or facilitates other human rights.

Producing and publishing content on accessibility in technology, AccessiTech provides clear and concise information to help disabled peoples more readily utilize the accessibility options available in their lives in order to better enable them to pursue their passions in a digital world.

Through the proliferation, decentralization, and democratization of technology accessibility information, AccessiTech seeks to lower the barriers to entry for disabled peoples throughout design and development communities abroad.

Collaborating and promoting design and technology for social change, AccessiTech aims to help create an increasingly accessible world for all.

## 🚀 Quick Start

### Prerequisites

- Node.js v20.19.0+
- Yarn package manager

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/AccessiTech/AccessiTech.git
   cd AccessiTech
   ```

2. Use the project Node version

   ```bash
   nvm use
   ```

3. Install dependencies

   ```bash
   yarn install
   ```

4. Start the development server

   ```bash
   yarn dev
   ```

5. Open your browser to http://localhost:5173 to see the application

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: SCSS and Bootstrap
- **Routing**: React Router
- **Build Tool**: Vite
- **Static Site Generation**: Custom SSG implementation
- **Testing**: Vitest and React Testing Library
- **Code Quality**: ESLint, Prettier

## 📂 Project Structure

```
AccessiTech/
├── docs/               # Generated static site output
├── public/             # Static assets
│   └── data/           # Blog and WCAG data
├── scripts/            # Build scripts (RSS, sitemap)
├── src/
│   ├── App/            # Main application components
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── scss/           # Global styles
│   ├── settings/       # App configuration
│   └── store/          # Redux store setup and slices
└── ...config files     # Various configuration files
```

## 🧪 Testing

Run tests with:

```bash
yarn test
```

Run tests in watch mode during development:

```bash
yarn test:watch
```

Generate test coverage report:

```bash
yarn test:coverage
```

## 🧹 Code Formatting

Format your code with Prettier:

```bash
yarn format
```

Check if your code is formatted properly:

```bash
yarn format:check
```

Format all files in the codebase:

```bash
yarn format:all
```

## 🔄 Development Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Run tests and ensure they pass
4. Format your code
5. Submit a pull request

## 🏗️ Building for Production

Generate a production build:

```bash
yarn build:prod
```

This will:

1. Generate RSS feed and sitemap
2. Build the application with Vite
3. Run the static site generator
4. Output to the `docs/` directory

## ♿ Accessibility Features

Our commitment to accessibility includes:

- **Semantic HTML**: Properly structured heading hierarchy and semantic elements
- **ARIA Labels**: Additional context for screen readers where needed
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Color Contrast**: WCAG 2.1 AA compliant color contrast ratios
- **Responsive Design**: Fully responsive layout with zoom support
- **Alternative Text**: All images include descriptive alt text
- **Screen Reader Support**: Tested with popular screen readers
- **Focus Management**: Proper focus handling for interactive elements
- **Reduced Motion**: Respects user preferences for reduced motion
- **Flexible Text**: Support for text resizing without breaking layouts

For more details about our accessibility testing or to report accessibility issues, please see our [testing documentation](testing/).

## 🧪 Testing & Quality

AccessiTech maintains rigorous accessibility and code quality standards:

- **Test Coverage**: ≥95% line coverage requirement
- **Accessibility Heuristics**: [10 testing heuristics](testing/ACCESSIBILITY_HEURISTICS.md) covering automated and manual verification
- **WCAG 2.2 AA Compliance**: Full [Success Criteria matrix](testing/WCAG_2_2_AA_COMPLIANCE.md) with test coverage mapping

Run the test suite:

```bash
yarn test
```

Generate coverage report:

```bash
yarn test:coverage
```

## 🤝 Contributing

We welcome contributions that help make technology more accessible for everyone! Please read our [Contributing Guide](CONTRIBUTING.md) for:

- Setup instructions and prerequisites
- Testing requirements (≥95% coverage)
- Accessibility testing protocols
- Pull request workflow
- Code formatting standards

Before contributing, please review our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🌐 Community & Support

- 🖥️ <a href="https://accessitech.github.io/AccessiTech/" alt="AccessiTech Website" title="AccessiTech Website" target="_blank">AccessiTech Website</a>
- 👨‍💼 <a href="https://www.linkedin.com/company/accessitech/" alt="AccessiTech on LinkedIn" title="AccessiTech on LinkedIn" target="_blank">AccessiTech on LinkedIn</a>
- ⏯️ <a href="https://www.youtube.com/channel/UCcke0DIj4p7QMFEKyFTU8RA" alt="AccessiTech on YouTube" title="AccessiTech on YouTube" target="_blank">AccessiTech on YouTube</a>
- 🐦 <a href="https://twitter.com/accessiT3ch" alt="AccessiTech on Twitter" title="AccessiTech on Twitter" target="_blank">AccessiTech on Twitter</a>
  <!-- <a href="" alt="AccessiTech on Reddit" title="AccessiTech on Reddit" target="_blank">AccessiTech on Reddit</a> -->
  <!-- <a href="" alt="AccessiTech on Instagram" title="AccessiTech on Instagram" target="_blank"><img src="AccessiTech on Instagram"></a> -->

## About AccessiTech LLC

### Accessibility for Design Technologists

AccessiTech LLC is a social enterprise dedicated to removing barriers for disabled design technologists by producing and sharing relevant industry expertise and personal / professional exploration via content across multiple social, hosting, and streaming platforms.

As a social enterprise, AccessiTech LLC fosters positive social change by promoting and collaborating on emergent technologies aimed at increasing accessibility, inclusion, and equity for all.

## Collaboration

AccessiTech believes collaboration is a form of accessibility. We encourage anyone interested in accessibility, inclusive design, or emergent technologies to reach out!

### Accessibility of this Website

Accessibility has been at the forefront of the design and development of this site. That being said, we are here to learn as much as to share, if not more so! If you notice something that makes this site inaccessible to you, that's a mismatch and we want to address it! If we're doing something wrong or outdated, or if you have ideas of how to better implement accessibility in the design or development, let us know and we can find solutions together! While we're doing everything we can upfront, we know that implementing web accessibility is an ongoing and iterative process.

### Issues / Bugs / Requests

We are adamant believers in simple and descriptive [Issues](https://github.com/AccessiTech/AccessiTech/issues) as a primary means of discussing and collaborating on just about anything!

### Contributing to this Website

We are very open to collaboration. If you'd like to contribute, let us know in an issue and we can chat, or fork the repo and submit a pull request! See our [Contributing Guide](CONTRIBUTING.md) for details.

---

## Disclosures

AccessiTech is committed to transparency, accessibility, and ethical practices. For details on how we handle monetization, community, and accessibility, please see our disclosures:

- [Accessibility Disclosure](https://www.accessi.tech/disclosures/accessibility)
- [Advertisement Disclosure](https://www.accessi.tech/disclosures/ads)
- [Affiliate Link Disclosure](https://www.accessi.tech/disclosures/affiliate-links)
- [Code of Conduct Disclosure](https://www.accessi.tech/disclosures/code-of-conduct)
- [Contributing Disclosure](https://www.accessi.tech/disclosures/contributing)
- [Sponsored Content Disclosure](https://www.accessi.tech/disclosures/sponsored-content)
