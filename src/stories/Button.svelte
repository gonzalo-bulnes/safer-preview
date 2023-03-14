<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
SPDX-FileCopyrightText: 2023 Freedom of the Press Foundation

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	import './button.css';

	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary = false;

	/**
	 * @type {string|undefined} What background color to use
	 */
	export let backgroundColor = undefined;

	/**
	 * @type {'small' | 'medium' | 'large'} How large should the button be?
	 */
	export let size = 'medium';

	/**
	 * @type {string} Button contents
	 */
	export let label;

	$: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

	$: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button
	type="button"
	class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
	{style}
	on:click
>
	{label}
</button>
