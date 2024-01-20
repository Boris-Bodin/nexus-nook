# 3. Styles & CSS

Date: 2024-01-15

## Status

Accepted

## Context

We need a styling solution for our project that allows us to write maintainable and scalable CSS. The solution should be easy to use, have a large community, and be well-documented.

## Decision

We have decided to use Tailwind CSS in combination with SCSS for styling our application.

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. SCSS is a preprocessor scripting language that is interpreted or compiled into CSS.

## Reasons

1. **Utility-First**: Tailwind CSS's utility-first approach allows us to compose complex designs without leaving our HTML.

2. **Customizable**: Tailwind CSS is highly customizable, allowing us to define our design constraints directly in our configuration, ensuring our design stays consistent.

3. **Performance**: Tailwind CSS is designed to be highly performant by default, resulting in smaller CSS files in production.

4. **Advanced Features with SCSS**: SCSS allows us to use features like variables, nesting, mixins, inheritance, and more, which can help us write more maintainable and scalable CSS.

## Consequences

1. **Learning Curve**: Developers unfamiliar with Tailwind CSS or SCSS may need some time to get used to the new workflow.

2. **Different Approach**: The utility-first approach of Tailwind CSS is different from traditional CSS and may take some time to get used to.
