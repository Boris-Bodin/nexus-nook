# 6. Test Framework

Date: 2024-01-16

## Status

Accepted

## Context

We need a state management solution for our project that allows us to handle server state, caching, synchronization, and updates. The solution should be easy to use, have a large community, and be well-documented.

## Decision

We have decided to use React Query as our state management solution.

React Query is a data fetching and state management library for React. It provides hooks to fetch, cache, and update asynchronous data in your React applications.

## Reasons

1. **Data Fetching and Caching**: React Query provides out-of-the-box support for fetching, caching, and updating asynchronous data in React.

2. **Automatic Refetching**: React Query automatically refetches data when inputs change or when the window refocuses, ensuring data is always up-to-date.

3. **Integration with React**: As a React library, React Query integrates well with React and aligns with React's component-based architecture.

## Alternatives Considered

We considered Redux and Zustand as potential state management solutions.

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. However, Redux requires a lot of boilerplate code and can be overkill for simple state management needs.

Zustand is a small, fast and scaleable bearbones state-management solution. It has a simple API but lacks some of the advanced features of React Query like automatic refetching and caching.

## Consequences

1. **Learning Curve**: Developers unfamiliar with React Query may need some time to get used to the new state management solution.

2. **Over-fetching**: React Query's automatic refetching can lead to over-fetching if not configured properly. However, this can be controlled with configuration options.
