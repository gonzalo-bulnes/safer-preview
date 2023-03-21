// SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import Button from '../lib/Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
export default {
	title: 'Atomic Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		style: {
			control: { type: 'text' }
		},
		text: {
			control: { type: 'text' }
		}
	}
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default = {
	args: {}
};

export const Text = {
	args: {
		text: 'Reveal'
	}
};
