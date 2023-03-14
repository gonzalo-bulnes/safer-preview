<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain

SPDX-License-Identifier: AGPL-3.0-or-later
-->

# Front-end developer manual

The frontend is a SvelteKit application.

## Getting started

Install the dependencies:

```bash
npm install
```

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Format all files:

```bash
npm run format
```

Lint all files:

```bash
npm run lint
```

## Testing

### Unit testing

```bash
npm run test:unit
```

### Visual, action and interaction testing

Component are classified in three categories, to ech of which corresponds a different level of testing.

#### Atomic components

Atomic components don't depend on other components (e.g. `Button`). These are typically _presentational components_, that is, their appearance only depends on their properties.

**Visual tests** are written by creating a story for each interesting combination of props. Those stories are rendered by Storybook to serve as a visual guide to using the component. They are also tracked by Chromatic, so that manual review can be required when the appearance of the component changes. If the changes are expected, they can be accepted and become the new baseline for later tests.

#### Composite components

Composite comppnents are composed of several other components, either atomic or composite themselves. (e.g. `LoginForm`) Those components typically exhibit specific _behavior_ by triggering _actions_ (e.g. `onLogin`).

Some **visual tests** ensure that the component looks as expected. Typically, composite components require less visual tests than atomic components, because they only use some specific combinations of props for each of their parts.

**Action tests** play automated scenarios to ensure that the actions are triggered when they should be (e.g. "clicking the `LOGIN` button does trigger the `onLogin` action"). Storybook and Chromatic run those tests automatically.

#### Pages

Pages are coherent collections of components that are ready to use in the application (e.g. `AboutPage`). These components are typically composed of other components that _interact_ with each other: triggering actions on one causes changes in others.

Some **visual tests** ensure that the component looks as expected. Typically, pages require less visual tests than atomic components, because they only use some specific combinations of props for each of their parts.

**Interaction tests** play automated scenarios to ensure that changes are rendered when actions are triggered (e.g. "performing the `onLogin` action from the `LoginForm` causes the `Welcome, Alice` text to become visible").

To render the story book and run all visual, action and interaction tests locally:

```bash
npm run storybook
```

To upload the story book to Chromatic and track visual changes:

```bask
npm run chromatic
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment

The application deployment is driven from the backend, see [Backend Developer Manual][bdm].

[bdm]: backend.md
