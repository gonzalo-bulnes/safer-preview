// SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
// SPDX-FileCopyrightText: 2023 Freedom of the Press Foundation
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { within, userEvent } from '@storybook/testing-library';

import Page from './Page.svelte';

export default {
	title: 'Example/Page',
	component: Page,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
		layout: 'fullscreen'
	}
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/7.0/svelte/writing-tests/interaction-testing
export const LoggedIn = {
	/**
	 *  @typedef {Object} CanvasContainer
	 *  @property {HTMLElement} canvasElement
	 */
	/**
	 * @param {CanvasContainer} argument
	 */
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const loginButton = await canvas.getByRole('button', {
			name: /Log in/i
		});
		await userEvent.click(loginButton);
	}
};
