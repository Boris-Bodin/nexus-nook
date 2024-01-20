# 1. Choose Next.js as Framework

Date: 2024-01-15

## Status

Accepted

## Context

We need to choose a JavaScript framework for our project that allows us to build a server-side rendered application. The framework should be easy to use, have a large community, and be well-documented.

## Decision

We have decided to use Next.js as our JavaScript framework.

Next.js is a React framework that provides infrastructure and simple development experience for server-side rendered (SSR) applications. It includes features like hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.

## Reasons

1. **Server-Side Rendering (SSR)**: Next.js provides automatic server rendering and code splitting, which can help improve the performance of our web application.

2. **Ease of Use**: Next.js has a very developer-friendly API surface. It provides a zero-configuration setup for features like TypeScript and bundling.

3. **Large Community and Well-Documented**: Next.js has a large community of developers and a wealth of resources available online. This means that help is readily available if we run into any issues.

4. **Built-In Routing**: Next.js comes with a built-in routing system that supports dynamic routes, nested routes, and even supports route prefetching out of the box.

5. **Integration with Vercel**: Next.js is developed by Vercel, which allows for seamless deployment and hosting, providing a smooth DevOps experience.

## Consequences

1. **Learning Curve**: As Next.js is a framework of React, developers unfamiliar with React will have a learning curve.

2. **Overhead**: Next.js provides a lot of features out of the box, which might add unnecessary complexity if we don't use these features.

3. **Lock-In**: As with any framework, using Next.js means we're committing to it for the foreseeable future. If we decide to switch to another framework later, it could require a significant amount of work.
