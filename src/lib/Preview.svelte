<!--
SPDX-FileCopyrightText: 2023 Gonzalo Bulnes Guilpain

SPDX-License-Identifier: AGPL-3.0-or-later
-->
<script>
	/**
	 * A preview displays a burred image and a button to reveal it.
	 *
	 * @component
	 */
	import image from './SitaSingsTheBlues.png';

	/**
	 * How intense to make the blur
	 * @type {'heavy'| 'medium'| 'light'}
	 */
	export let blur = 'medium';

	let revealed = false;

	const toggleBlur = () => {
		revealed = !revealed;
	};
</script>

<div class="frame">
	<img alt="" src={image} class={revealed ? 'blur-none' : `blur-${blur}`} />
	<div class="overlay">
		<button on:click={toggleBlur}>{revealed ? 'Blur' : 'Reveal'}</button>
	</div>
</div>

<style>
	.frame {
		background-color: #333;
		display: inline-block;
		min-height: 240px;
		min-width: 320px;
		max-height: 100%;
		max-width: 100%;
		overflow: hidden;
	}

	.frame,
	img {
		position: relative;
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
