<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	/**
	 * A box that expands in its parent and centers its content.
	 *
	 * @component
	 */

	/**
	 * Overriding style. Use wisely.
	 * @type {string | undefined}
	 */
	export let style = undefined;
</script>

<div {style}>
	<slot>The content of the box.</slot>
</div>

<style>
	div {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		width: 100%;
	}
</style>
