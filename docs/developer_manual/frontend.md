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

Format al files:

```bash
npm run format
```

Lint all files:

```bash
npm run lint
```

## Testing

```bash
npm run test:unit
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
