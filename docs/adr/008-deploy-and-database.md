# 8. Deployment and Database

Date: 2024-01-18

## Status

Accepted

## Context

We need a deployment platform for our project that allows us to deploy our web application with ease and efficiency. We also need a database tool that allows us to work with our database in a type-safe and productive way.

## Decision

We have decided to use Vercel for deployment and Prisma as our ORM. We have chosen PostgreSQL as our database.

Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with our use of Next.js. Prisma is an open-source ORM that makes it easy to reason about your database schema and how to fetch data. PostgreSQL is a powerful object-relational database system.

## Reasons

1. **Ease of Use with Vercel**: Vercel provides a seamless deployment experience, especially for Next.js applications. It also offers features like automatic HTTPS and continuous deployment.

2. **Performance and Scalability**: Vercel is built to scale and can serve our web application with high performance across the globe.

3. **Type-Safe Database Access with Prisma**: Prisma provides type-safe database access and auto-completion for database queries, which can help prevent runtime errors and improve developer productivity.

4. **Prisma Migrate**: Prisma Migrate allows us to keep our database schema in sync with our Prisma models. It also provides a way to version control our database schema.

5. **PostgreSQL Database**: PostgreSQL is a powerful object-relational database system with a strong reputation for reliability, feature robustness, and performance.

## Consequences

1. **Vendor Lock-In**: As we will be using Vercel for deployment, our deployment process will be dependent on Vercel. If we decide to switch to another deployment platform in the future, it could require a significant amount of work.
