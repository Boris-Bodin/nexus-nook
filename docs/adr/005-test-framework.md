# 5. Test Framework

Date: 2024-01-16

## Status

Accepted

## Context

We need a testing framework for our project that allows us to write unit and integration tests. The framework should be easy to use, have a large community, and be well-documented.

## Decision

We have decided to use Vitest as our testing framework.

Vitest is a fast and lightweight testing framework designed for Vite, but it also works well with other JavaScript and TypeScript projects.

## Reasons

1. **Speed**: Vitest is designed to be fast. It uses ES modules and Vite's native module server, which results in faster test execution compared to Jest.

2. **Lightweight**: Vitest is lightweight and has fewer dependencies compared to Jest, which can help keep our project's dependency tree smaller and more manageable.

3. **ES Modules Support**: Vitest has native support for ES modules, which aligns with our project's use of ES modules.

4. **TypeScript Support**: Vitest has built-in support for TypeScript, which aligns with our project's use of TypeScript.

## Alternatives Considered

We considered Jest, which is a popular testing framework in the JavaScript ecosystem. Jest is well-documented and has a large community, but it's slower and heavier compared to Vitest. Jest also has some issues with ES modules, which can be problematic for our project.

## Consequences

1. **Smaller Community**: Vitest has a smaller community compared to Jest, which means there might be fewer resources and third-party libraries available.
