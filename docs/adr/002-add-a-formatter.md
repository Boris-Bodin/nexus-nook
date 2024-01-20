# 2. Add a formatter

Date: 2024-01-15

## Status

Accepted

## Context

We need a consistent code style across our project to ensure readability and maintainability. Manual enforcement of code style can be time-consuming and error-prone. Therefore, we need an automated solution for code formatting.

## Decision

We have decided to use Prettier in combination with Husky for automatic code formatting.

Prettier is an opinionated code formatter that supports multiple languages and integrates with most editors. On the other hand, Husky is a tool that can prevent bad `git commit`, `git push`, and more 🐶 woof!

## Reasons

1. **Consistent Code Style**: Prettier enforces a consistent code style across our project, which can help reduce the cognitive load of switching between different coding styles and increase our productivity.

2. **Integration with Editors**: Prettier integrates with most text editors, which allows us to format our code as we type or save our files.

3. **Support for Multiple Languages**: Prettier supports many languages, including JavaScript, TypeScript, HTML, CSS, Markdown, and more. This makes it a versatile tool for our project.

4. **Pre-Commit Hook with Husky**: By using Husky, we can set up a pre-commit hook that automatically formats our code with Prettier before it's committed. This ensures that all committed code adheres to our chosen code style.

## Consequences

1. **Opinionated Formatting**: Prettier is an opinionated tool, and some of its formatting decisions may not align with personal preferences. However, it supports configuration options for customizing its behavior.
