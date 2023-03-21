// SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import MainPage from '../lib/MainPage.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
export default {
	title: 'Pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],
	argTypes: {
		style: {
			control: { type: 'text' }
		}
	}
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default = {
	args: {}
};
