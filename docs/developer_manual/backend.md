<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
SPDX-FileCopyrightText: 2023 Freedom of the Press Foundation

SPDX-License-Identifier: AGPL-3.0-or-later
-->

# Backend developer manual

The backend is a Tauri application and a Rust library. The Tauri application provides an interface between the frontend and the Rust library. The domain-specific aspects of the application should be contained in the library.

## Getting started

All backend development happens in `src-tauri/`.

```bash
cd src-tauri
```

## Developing

Format all files:

```bash
cargo fmt
```

Lint all files:

```bash
cargo clippy
```

## Testing

### Unit testing

```bash
cargo test
```

_Rest to be defined._
