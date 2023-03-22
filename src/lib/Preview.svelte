<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain
SPDX-FileCopyrightText: 2023 Freedom of the Press Foundation
SPDX-FileCopyrightText: 2016 Lea Verrou

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	/**
	 * A preview displays a burred image and a button to reveal it.
	 *
	 * @component
	 */
	import { default as example } from './SitaSingsTheBlues.png';
	import Button from './Button.svelte';

	/**
	 * How intense to make the blur
	 * @type {'heavy'| 'medium'| 'light'}
	 */
	export let blur = 'medium';

	/**
	 * A URL representing the image to preview
	 * @type {string}
	 */
	export let image = example;

	/**
	 * Overriding style. Use wisely.
	 * @type {string | undefined}
	 */
	export let style = undefined;

	let revealed = false;

	const toggleBlur = () => {
		revealed = !revealed;
	};
</script>

<div class="frame" {style}>
	<img alt="" src={image} class={revealed ? 'blur-none' : `blur-${blur}`} />
	<div class="overlay">
		<Button on:click={toggleBlur} text={revealed ? 'Blur' : 'Reveal'} />
	</div>
</div>

<style>
	.frame {
		align-items: center;
		display: flex;
		justify-content: center;
		overflow: hidden;
		width: fit-content;
	}

	.frame,
	img {
		position: relative;
	}

	img {
		/* See https://projects.verou.me/css3patterns/#checkerboard */
		--dark: #b8b8b8;
		--light: #fff;
		--size: 8px;
		background-color: var(--light);
		background-image: linear-gradient(
				45deg,
				var(--dark) 25%,
				transparent 25%,
				transparent 75%,
				var(--dark) 75%,
				var(--dark)
			),
			linear-gradient(
				45deg,
				var(--dark) 25%,
				transparent 25%,
				transparent 75%,
				var(--dark) 75%,
				var(--dark)
			);
		background-size: calc(var(--size) * 2) calc(var(--size) * 2);
		background-position: 0 0, var(--size) var(--size);
	}

	.blur-none {
		filter: blur(0);
	}
	.blur-light {
		filter: blur(6px);
	}
	.blur-medium {
		filter: blur(12px);
	}
	.blur-heavy {
		filter: blur(24px);
	}

	.overlay {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		position: absolute;
		width: 100%;
		top: 0;
	}
</style>
