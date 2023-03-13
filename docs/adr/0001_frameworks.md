<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain

SPDX-License-Identifier: AGPL-3.0-or-later
-->

# Frameworks

## Context and problem statement

### Main technical goals

#### MUST

- Allow for ongoing development of a high-quality user experience.
- Provide a desktop application.
- Be compatible with the usual malware mitigations that are used when opening files from unknown provenance.
- Allow to preview the most common image formats.
- Be compatible with the usual risk mitigations that are used when opening confidential files.
- Allow to create a performant user experience with reasonable resource consumption.

#### SHOULD

- Be multi-platform (common Linux flavors, MacOS, Windows)
- Support localization (minimum: translations, RTL–LTR variants)
- Make reasonably easy to onboard new contributors.
- Make reasonably easy to experiment, extend, and test.
- Make reasonably easy to map the security properties of the application.

### Secondary goals

- Provide a Rust learning ground.
- Provide a platform to experiment with frontend tooling.

## Considered options

The decision is skewed in this case, because I'm particularly interested in trying out _option 1_, and that option also provides an opportunity to practice working with Rust.

1. Rust library, Tauri and SvelteKit

## Decision outcome

**Chosen option**: Rust library, Tauri and SvelteKit.

- Tauri, Svelte are open-source frameworks.
- Rust, and the web standards are open-source too.
- All have higher-than-average documentation standards.
- Tauri provides a framework to think about the security properties of the application.
- The stack is multi-platform.
- Both Tauri and Svelte have documented internationalization support, the Rust backend shouldn't require internationalization.
- In a Tauri project the frontend development can be decoupled from the backend and chrone development. Concretely, the frontend can be developped as a standard Svelte or SvelteKit application.
- The tooling to work with web standards is best-in-class, Svelte, while young, is adequately supported.
- Rust provides best-in-class tooling (inline docs, format, clippy)
- Rust, Svelte (and Tauri to some extent) have a specific focus on performance.

Additionally:

- Writing the application backend in Rust is a good opportunity to practice working with Rust.
- I'm interested in experimenting with the architecture of and application built around Tauri.
- I'm interested in demonstrating what the day-to-day development of a SvelteKit frontend can look like.
