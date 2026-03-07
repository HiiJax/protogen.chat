<script>
    let { data } = $props();
</script>

<svelte:head>
	<title>webring | protogen.chat</title>
</svelte:head>

<h1>Protogen Webring</h1>
<hr>
<a class="smol" href="https://indieweb.org/webring">First time seeing a webring? </a>
<p>
    Within this webring, you'll find websites related to "protogens", a fictional species created by 
    <a href="https://coolkoinu.carrd.co/">KOINU</a> in the <a href="https://en.wikipedia.org/wiki/Furry_fandom">furry fandom</a>.
    Members might use them to represent themselves (this is usually referred to as a <a href="https://en.wikipedia.org/wiki/Fursona">fursona</a>), 
    have created character(s) based on the species, be an artist that draws other's protogens, or maybe they're just a really big fan of protogens!
</p>
<p>
    You can learn more about protogens on <a href="https://zoruniverse.info/">Zenith's Outer Reach</a>.
</p>
<h2>Members</h2>
<p>The following sites are in the ring! We're still brand new and looking for members!</p>
<table>
    <thead>
        <tr>
            <th>Website</th>
            <th>NSFW?</th>
        </tr>
    </thead>
    <tbody>
        {#each data.webring as { website, nsfw }}
        <tr>
            <td><a href="https://{website}">{website}</a></td>
            <td>{nsfw}</td>
        </tr>
        {/each}
    </tbody>
</table>
<br>
<hr>
<h2>Join the Ring!</h2>
<p>
    If you already have a website, it's easy to join the ring! Just add the links to your site and make sure you follow the rules. 
    Once you're ready, send a message or (if you're feeling savvy) open a pull request!
</p>
<h3>Links</h3>
<p>Your site needs the following links to join the Protogen Webring.</p>
<table>
    <thead>
        <tr>
            <th>Potential Label</th>
            <th>href</th>
        </tr>
        <tr>
            <td>ProtogenRing</td>
            <td><code>https://protogen.chat/webring</code></td>
        </tr>
        <tr>
            <td>&lAarr; Prev</td>
            <td><code>https://protogen.chat/webring/<i>your.domain</i>/previous</code></td>
        </tr>
        <tr>
            <td>Next &rAarr;</td>
            <td><code>https://protogen.chat/webring/<i>your.domain</i>/next</code></td>
        </tr>
    </thead>
</table>
<p>Currently, styling has not yet been created for the links. You can check out how members have implemented the links for inspiration</p>
<p>Contributions for a unified design would be welcomed &lt;3 </p>
<!--
<p>The following links are available to use, but not currently required to join the Protogen Webring.</p>
<table>
    <thead>
        <tr>
            <th>Suggested Label</th>
            <th>href</th>
        </tr>
        <tr>
            <td>Random</td>
            <td><code>https://protogen.chat/webring/<i>your.domain</i>/random</code></td>
        </tr>
    </thead>
</table>
-->
<br>
<h3>Rules</h3>
<p>All rules are subject to change. This website and webring are run solely by me, <a href="https://hiijax.net">Jax</a>. 
    While I will do my best, I make no guarantees to uptime or enforcement.</p>
<h5>Must be a website</h5>
<ul>
    <li>The webring must be able to link <i>to</i> the root of a domain (e.g. your.domain) or subdomain (e.g. yoursubdomain.neocities.org)</li>
</ul>
<h5>Must be accessible</h5>
<ul>
    <li>The webring links should be in an easy to access place on your website, preferably shown on every page in a header, footer, or sidebar.</li>
    <li>Paths (example.com/links) are discouraged, but acceptable, for your outgoing links <i>from</i> the webring. The webring can't link <i>to</i> paths.</li>
</ul>
<h5>NSFW content MUST be gated</h5>
<ul>
    <li>
        If your website contains ANY kind of 18+ content, you MUST have a warning page prior 
        to entering the site. The webring MUST be accessible from said page so that users 
        that do not wish to see the NSFW content can still continue through the ring.
    </li>
</ul>
<h5>Sites must have relevance to protogens</h5>
<ul>
    <li>You don't need to <i>be</i> a protogen to join the ring, you don't even need a protogen OC. Protogen artists and fans are all welcome too!</li>
    <li>As long as you've got a protogen sona or your site has something that protogen enjoyers might like to see, you're welcome to join!</li>
</ul>
<h5>Sites must be secure</h5>
<ul>
    <li>You need to be able to reach your site at <code>https://your.domain</code> - <code>http://your.domain</code> is not gonna cut it.</li>
</ul>
<h5>Don't be shitty</h5>
<ul>
    <li>Hate is not tolerated in the slightest.</li>
    <li>Keeping furry weird is fine. But being rude, creepy, etc is not acceptable.</li>
    <li><a href="https://hiijax.net">Jax</a> is site owner and has final say on what defines shitty behaviour. They may be opinionated.</li>
</ul>
<p><strong>If you see any of these rules being broken, please <a href="/contact">contact Jax</a> ASAP.</strong></p>
<hr>
<h2>The Guts...</h2>
<p>So you want to know about the inner workings of this ring? You nerd. You're cool, I like you.</p>
<p>
    Good news for you is that all the code is <a href="https://github.com/HiiJax/protogen.chat">on GitHub</a>.
    It's free for you to use as you'd like, as long as you follow the 
    <a href="https://github.com/HiiJax/protogen.chat/blob/main/LICENSE">MIT license</a> (easy to do). It's totally custom made by Jax,
    without using any existing webring code or AI! It's made in <a href="https://svelte.dev/">SvelteKit</a>, which actually has a
    routing system that made it super easy to build. Everything done here can be learned from their rather solid set of tutorials.
</p>
<p>
    With that being said, Jax is still a pretty beginner developer, so if you find something funky, please 
    <a href="https://github.com/HiiJax/protogen.chat/issues">report it</a>!
</p>