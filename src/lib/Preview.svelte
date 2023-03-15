<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	import image from './SitaSingsTheBlues.png';

	let revealed = false;

	const onClick = () => {
		console.log('clicked');
		revealed = !revealed;
	};
</script>

<div class={['preview', revealed ? 'revealed' : ''].join(' ')}>
	<img alt="" src={image} />
	<div class="button">
		<button on:click={onClick}>{revealed ? 'Blur' : 'Reveal'}</button>
	</div>
</div>

<style>
	.preview {
		display: inline-block;
		overflow: hidden;
		min-height: 240px;
		min-width: 320px;
		max-height: 100%;
		max-width: 100%;
		background-color: #333;
	}
	.preview,
	img {
		position: relative;
	}
	img {
		filter: blur(8px);
	}

	.revealed img {
		filter: blur(0);
	}

	.button {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
	}
	.revealed .button {
		border-width: 0;
	}
</style>
