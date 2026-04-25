<script lang="ts">
	import './style.css'

	let { children } = $props();
</script>

<svelte:head>
	<title>protogen.chat</title>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="protogen.chat" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="description" content="A corner of the web for protogens! Home of the Protogen Webring.">
	<meta name="theme-color" content="#aa5edd">
</svelte:head>

<a href="#content" id="skip-to-content-link">Skip to content</a>

<div class="layout">
	<header>
			<a class="header-title" href="/">protogen<span class="accent">.</span>chat</a>

			<nav>
				<a href="/about">About</a>
				<a href="/webring">Webring</a>
				<a href="/services">Services</a>
			</nav>

	</header>
	<main id="content">
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
				<a href="https://synth.download" target="_blank">
					<img 
						class="button"
						width="88"
						height="31"
						src="/buttons/synthdownload.svg"
						alt="synth.download!"
            title="synth.download!"
						loading="lazy"
					/>
				</a>
				<a href="https://protogen.chat" target="_blank">
					<img 
						class="button"
						width="88"
						height="31"
						src="/buttons/protogen.gif"
						alt="protogen.chat"
            title="protogen.chat"
						loading="lazy"
					/>
				</a>
			</div>
		</div>
		<br>
		<div class="footer-content">
			<div>
				&copy; <a href="https://hiijax.net">HiiJax</a> 2026, <a href="https://github.com/HiiJax/protogen.chat">code</a> under 
				<a href="https://github.com/HiiJax/protogen.chat/blob/main/LICENSE">MIT license</a>, use and abuse it!
			</div>
			<div>
				<a rel="me" href="https://bsky.app/profile/protogen.chat">Bluesky</a> |
				<a href="https://status.protogen.chat">Status</a> |
				<a href="/contact">Contact</a>  |
				<a href="/credits">Credits</a>
			</div>
		</div>
	</footer>
</div>