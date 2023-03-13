// SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
//
// SPDX-License-Identifier: CC0-1.0

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
