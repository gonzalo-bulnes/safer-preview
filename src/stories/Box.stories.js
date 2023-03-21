// SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import Box from '../lib/Box.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
export default {
	title: 'Atomic Components/Box',
	component: Box,
	tags: ['autodocs'],
	argTypes: {
		style: {
			control: { type: 'text' }
		}
	}
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default = {
	args: {
		style: 'border: 1px solid pink'
	}
};
