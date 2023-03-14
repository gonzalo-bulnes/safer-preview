// SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
