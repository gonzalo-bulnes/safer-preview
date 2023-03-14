<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
SPDX-FileCopyrightText: 2023 Freedom of the Press Foundation

SPDX-License-Identifier: AGPL-3.0-or-later
-->

# Developer manual

## Overview

- **Frontend**: a SvelteKit application, see [Frontend Developer Manual][fdm]
- **Backend**: a Tauri application, and a Rust library see [Backend Developer Manual][bdm]

  [fdm]: frontend.md
  [bdm]: backend.md

## Preview the application

Install the prerequisites to run Tauri in development:

- https://tauri.app/v1/guides/getting-started/prerequisites/

Install the frontend dependencies:

```bash
npm install
```

Start a development build of the application:

```bash
npm run tauri dev
```
