<script>
	import './style.css'
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<title>protogen.chat</title>
	<link rel="icon" href={favicon} />
	<meta name="description" content="A corner of the web for protogens!">
	<meta name="theme-color" content="#aa5edd">
</svelte:head>

<div class="layout">
	<header>
			<a class="header-title" href="/">protogen<span class="accent">.</span>chat</a>

			<nav>
				<a href="/about">About</a>
				<a href="/webring">Webring</a>
				<a href="/bluesky">Bluesky Handles</a>
			</nav>

	</header>
	<main>
		{@render children()}
	</main>
	<footer>
		<div class="footer-content">
			<div>
				<a class="ring-link" href="https://protogen.chat/webring/protogen.chat/previous">&larr;</a>
				<a class="ring-link" href="https://protogen.chat/webring">ProtogenRing</a>
				<a class="ring-link" href="https://protogen.chat/webring/protogen.chat/next">&rarr;</a>
			</div>
			<div>
				<a href="https://protogen.chat" target="_blank"><img src="/buttons/protogen.gif" alt="protogen.chat"></a>
				<!--<a href="https://hiijax.net" target="_blank"><img src="https://hiijax.net/buttons/hiijax.gif" alt="HiiJax"></a>-->
			</div>
		</div>
		<br>
		<div class="footer-content">
			<div>
				&copy; <a href="https://hiijax.net">HiiJax</a> 2026 |
				Code under <a href="https://github.com/HiiJax/protogen.chat/blob/main/LICENSE">MIT license</a>, available on <a href="https://github.com/HiiJax/protogen.chat">GitHub</a>
			</div>
			<div>
				<a href="/contact">Contact</a> |
				<a href="/credits">Credits</a>
			</div>
		</div>
	</footer>
</div>