# 4. TypeScript and ESLint

Date: 2024-01-15

## Status

Accepted

## Context

We are developing a web application and need a statically typed language to catch errors early, improve developer productivity, and enhance the maintainability of our codebase. We also need a linting tool to enforce code quality and consistency.

## Decision

We have decided to use TypeScript as our primary language and ESLint as our linting tool.

TypeScript is a statically typed superset of JavaScript that adds optional types to JavaScript, making it more suitable for large-scale web development. ESLint is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## Reasons

1. **Static Typing with TypeScript**: TypeScript's static typing can help us catch errors early in the development process. It can also improve our developer productivity by providing enhanced autocompletion, navigation, and refactoring in IDEs.

2. **ESLint for Linting**: ESLint can help us enforce code quality and consistency. It's highly configurable and has a large ecosystem of plugins, allowing us to customize it to fit our needs.

3. **Integration with Editors**: Both TypeScript and ESLint have excellent integration with most text editors, providing real-time feedback as we write our code.

## Consequences

1. **Build Time**: TypeScript adds a compilation step to the development process, which can increase our build time. However, this is usually offset by the time saved from catching errors early.
