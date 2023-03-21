<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	/**
	 * A button.
	 *
	 * The button text can be set, or content passed as a slot.
	 *
	 * @component
	 */

	/**
	 * Overriding style. Use wisely.
	 * @type {string | undefined}
	 */
	export let style = undefined;

	/**
	 * The button's text
	 * @type {string|undefined}
	 */
	export let text = undefined;
</script>

<button on:click {style}>
	<slot>{text ? text : 'Click me!'}</slot>
</button>
