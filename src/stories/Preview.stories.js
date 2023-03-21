// SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import Preview from '../lib/Preview.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
export default {
	title: 'Composite Components/Preview',
	component: Preview,
	tags: ['autodocs'],
	argTypes: {
		blur: {
			control: { type: 'select' },
			options: ['light', 'medium', 'heavy']
		},
		style: {
			control: { type: 'text' }
		}
	}
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default = {
	args: {}
};
