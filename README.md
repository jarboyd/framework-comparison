# Framework Comparison

First and foremost, it has to be said that all four frameworks provide the same basic functionality (bindings/reactivity) but not all of them provide important functions like routing (really only Angular does and even for this its an extra package to be added). They all have a solution for that however - Next, Nuxt, SvelteKit, (angular router). The main difference is in how development feels for each one because of slight syntax differences. On a more technical level, they have some specialities that make them unique, but none of them really make or break a framework. Rolling a dice would probably work for choosing which framework to use - all are well tested and sure to have continued support by the community and core development team.

To compare the four most popular JS/TS frameworks I will create the same simple event listing app in each framework. All implementations will adhere to clean architecture principles, as well as use the same backend API, which will be a simple express.js app using postgres to store data. For design, all implementations will use Tailwind and DaisyUI, maybe even with components that work for all frameworks, if that is possible.

## First framework: React/Next

React is probably the most popular framework amongst the four, and Next.js is basically just React plus a router (and some SSR features etc.).

## Second framework: Vue/Nuxt

Again, like with React, Nuxt is an Vue extended by a router and other tools.

## Third framework: Svelte/SvelteKit

SvelteKit is also an extension of Svelte adding router functionalities and other tools.

## Fourth framework: Angular

Other than the previous frameworks, Angular comes with its own router and is also opinionated in other regards, meaning the developer has less influence on core principles, which limits individuality, but encourages a robust and comparable overall structure for all projects using Angular.

## Todo and further thoughts

As time goes on I will add pros/cons and other findings about all four frameworks.
