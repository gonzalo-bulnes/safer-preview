// SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { within, userEvent } from '@storybook/testing-library';
import Preview from '../lib/Preview.svelte';
import { default as example } from './icon.png';

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
	args: {},
	/**
	 *  @typedef {Object} CanvasContainer
	 *  @property {HTMLElement} canvasElement
	 */
	/**
	 * @param {CanvasContainer} argument
	 */
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const revealButton = await canvas.getByRole('button', {
			name: /reveal/i
		});
		await userEvent.click(revealButton);

		const blurButton = await canvas.getByRole('button', {
			name: /blur/i
		});
		await userEvent.hover(blurButton);
	}
};
export const LightBlur = {
	args: {
		blur: 'light'
	}
};
export const HeavyBlur = {
	args: {
		blur: 'heavy'
	}
};
export const Transparency = {
	args: {
		image: example
	},
	/**
	 * @param {CanvasContainer} argument
	 */
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const revealButton = await canvas.getByRole('button', {
			name: /reveal/i
		});
		await userEvent.click(revealButton);
	}
};
