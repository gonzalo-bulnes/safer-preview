<!--
SPDX-FileCopyrightText: 2023 Freedom of the Press Foundation

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	import { appWindow, LogicalSize } from '@tauri-apps/api/window';
	import { beforeUpdate } from 'svelte';

	/**
	 * The width of the content
	 * @type number
	 */
	let width;
	/**
	 * The height of the content
	 * @type number
	 */
	let height;

	beforeUpdate(() => {
		// FIXME: produces a visual artifact when lading a large image,
		// the blur filter seems to be applies to a smaller square in addition
		// to the rectangle that covers the image.
		// That artifact disappears on re-render.
		width && height && appWindow.setSize(new LogicalSize(width, height));
	});
</script>

<div bind:clientWidth={width} bind:clientHeight={height}>
	<slot />
</div>

<style>
	:global(body) {
		margin: 0;
	}
	div {
		/* Ensure the div dimensions can be used to resize the window. */
		width: fit-content;
	}
</style>
