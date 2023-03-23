<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	/**
	 * A file input that allows files to be opened.
	 *
	 * This minimal form relies on the native file dialog
	 * to allow the filesystem to be browsed and one file
	 * file to be selected.
	 *
	 * @component
	 */
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * List of MIME types to accept
	 * @type {string}
	 */
	export let accept = '*';

	/**
	 * Overriding style. Use wisely.
	 * @type {string | undefined}
	 */
	export let style = undefined;

	/** @type {FileList | undefined} */
	let files;

	/**
	 * The file that is currently selected
	 * @type {File | null } */
	let selected = null;
	$: selected = files && files.length > 0 ? files.item(0) : null;

	const emitFileSelected = () => {
		dispatch('fileSelected', {
			file: selected
		});
	};
</script>

<label {style}>
	<input type="file" {accept} bind:files on:change={emitFileSelected} />
</label>

<style>
	input {
		border: 2px dashed #d8d8d8;
		border-radius: 8px;
		padding: 24px;
	}
	label {
		display: block;
		padding: 16px;
	}
</style>
