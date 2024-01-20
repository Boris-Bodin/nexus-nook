# 7. Miu and Storybook

Date: 2024-01-17

## Status

Accepted

## Context

We need a UI library for our project that allows us to build user interfaces with ease and consistency. We also need a tool to develop and test our UI components in isolation.

## Decision

We have decided to use Miu as our UI library and Storybook as our component explorer.

Miu is a lightweight and customizable UI library for React. Storybook is an open-source tool for developing UI components in isolation for React, Vue, Angular, and more.

## Reasons

1. **Ease of Use with Miu**: Miu provides a set of pre-built UI components that we can use to build our user interfaces. This can help us save time and ensure consistency across our application.

2. **Customizable**: Miu is highly customizable, allowing us to adjust the look and feel of the components to match our design requirements.

3. **Component Development with Storybook**: Storybook provides a sandbox to build and test our UI components in isolation, which can improve our development workflow.

4. **Documentation**: Storybook can also serve as a documentation site, providing a way to showcase our components and their different states.

## Consequences

1. **Dependency on Miu**: As we will be using Miu's pre-built components, our UI will be dependent on Miu. If we decide to switch to another UI library in the future, it could require a significant amount of work.
