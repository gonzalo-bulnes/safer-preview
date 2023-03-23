<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	/**
	 * The main page of the application.
	 *
	 * @component
	 */
	import Preview from './Preview.svelte';
	import FileInput from './FileInput.svelte';

	/**
	 * Overriding style. Use wisely.
	 * @type {string | undefined}
	 */
	export let style = undefined;

	/**
	 * A URL representing a file
	 * @type {string | undefined}
	 */
	let image;

	/**
	 * @param {CustomEvent<any>} event
	 */
	const setImage = (event) => {
		image = URL.createObjectURL(event.detail.file);
	};
</script>

{#if image}
	<Preview {style} {image} />
{:else}
	<FileInput {style} accept="image/*" on:fileSelected={setImage} />
{/if}
