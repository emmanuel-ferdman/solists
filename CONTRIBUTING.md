# Contributing to SoLists

Thank you for your interest in contributing to SoLists! This document will guide you through the process and best practices for contributing to the project.

## Project Overview

SoLists is a TypeScript library implementing self-organizing lists (SoList) with multiple heuristics, such as:

- **Frequency Count**: Moves frequently accessed items forward based on access count.
- **Move to Front**: Moves accessed items to the front of the list.
- **Transpose**: Swaps accessed items with their predecessor.

The core data structure is a doubly linked list (`DoublyLinkedList`), with each heuristic implemented as a subclass. The project provides methods similar to JavaScript's Array, plus custom methods for list manipulation. Rearrangement can occur on search or creation, depending on the configuration.

Tests are organized by data structure and method, and use Mocha for running the suite. See the `tests/` folder for details.

## Development

### Environment Setup

First, [fork this project](https://github.com/emmanuel-ferdman/solists/fork) on GitHub and clone it to your local machine:

```sh
git clone https://github.com/<your-username>/solists.git
cd solists
```

Install dependencies:

```sh
npm install
```

### Formatting

This project uses ESLint and Prettier to maintain code quality and consistency. To check for code style and possible errors, run:

```sh
npm run lint
```

To check code formatting, run:

```sh
npm run format
```

### Test Suite

To run the SoLists test suite, use:

```sh
npm run test
```

To generate an HTML coverage report for the tests in the `coverage/` folder, use:

```sh
npm run coverage
```

## Pull Request

### Commit Message

To help automate releases, please use a clear and consistent title for your pull requests. We loosely follow the [Conventional Commits](https://www.conventionalcommits.org) format:

```
<type>: <summary>
```

Where `<type>` describes the kind of change:

- `build`: changes related to the build process
- `chore`: routine maintenance, updates to tooling, or other non-feature/non-fix changes
- `ci`: changes to continuous integration
- `docs`: update documentation or comments
- `feat`: add or improve a feature
- `fix`: fix a bug
- `refactor`: refactor code without changing features or performance
- `style`: update code style only
- `test`: changes to the test suite

The `<summary>` should be a brief, present-tense description (not capitalized, no period).

Example:

```
feat: add support for custom sort order
```

We do not currently use commit scopes (e.g. `<type>(<scope>): <summary>`), but you may include one if it helps clarify your change.

### Breaking Changes

If your pull request introduces a breaking change, please add a clearly marked section at the end of your description explaining what is breaking and why. This helps reviewers and maintainers avoid merging breaking changes unintentionally.

## Need Help?

If you have questions, open an issue to start a discussion on GitHub.
