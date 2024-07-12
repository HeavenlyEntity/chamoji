Please refer to the design document first: https://chatgpt.com/share/7415c4a5-d8bc-4227-9100-b9504b5cf7e6

# Contributing to Chamoji

Thank you for considering contributing to the **Chamoji** clone project! We welcome all types of contributions, including bug reports, feature requests, and pull requests.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How to Contribute](#how-to-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Features](#suggesting-features)
    - [Submitting Pull Requests](#submitting-pull-requests)
3. [Development Setup](#development-setup)
4. [Style Guide](#style-guide)
5. [Testing](#testing)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please take a moment to read it.

## How to Contribute

### Reporting Bugs

If you find a bug, please report it by [opening an issue](https://github.com/HeavenlyEntity/chamoji/issues). Include as much detail as possible to help us understand and reproduce the issue. Some things you might include are:
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots or error messages

### Suggesting Features

If you have an idea for a new feature or an improvement to an existing feature, please [open an issue](https://github.com/HeavenlyEntity/chamoji/issues) and describe your suggestion. Please include:
- A clear description of the feature or improvement
- The problem it solves or the use case it addresses
- Any relevant examples or mockups

### Submitting Pull Requests

We welcome pull requests for bug fixes, new features, and documentation improvements. To submit a pull request:
1. Fork the repository.
2. Create a new branch from `main` for your changes (`git checkout -b feature/my-feature`).
3. Make your changes, following the [style guide](#style-guide).
4. Write or update tests as needed.
5. Commit your changes (`git commit -m "Description of your changes"`).
6. Push to your fork (`git push origin feature/my-feature`).
7. [Open a pull request](https://github.com/HeavenlyEntity/chamoji/pulls) against the `main` branch of this repository.

Please ensure your pull request follows these guidelines:
- Include a clear description of the changes and why they are needed.
- Reference any related issues or pull requests.
- Ensure your changes do not introduce new issues.

## Development Setup

To set up the development environment:

1. **Clone the repository:**
```sh
git clone https://github.com/your-username/chamoji.git
cd chamoji
```
   
2. Install dependencies:

```sh
npm install
```

3. Run the application:

```sh
npm start
```

4. Run the tests:

```sh
npm test
```

## Style Guide
We follow the following coding conventions:

Use **Prettier** for code formatting. Run `npx prettier --write`. before committing.
Follow **Airbnb's JavaScript style guide**. Lint your code with `npx eslint .`.
Use **meaningful commit messages**. Follow the conventional commits specification.
Testing
We use Jest for testing. Ensure that all existing tests pass and add new tests for any new functionality. To run the tests:

```sh
npm test
```

Please ensure your code changes do not decrease test coverage. You can check the coverage by running:

```sh
npm run test:coverage
```

## Thank You!

Thank you for taking the time to contribute to Chamoji! Your contributions are what make this project successful and impactful. If you have any questions, feel free to open an issue or reach out to the maintainers.

Happy coding!
