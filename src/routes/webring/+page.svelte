<script lang="ts">
    let { data } = $props();
</script>

<svelte:head>
	<title>webring | protogen.chat</title>
</svelte:head>

<h1>Protogen Webring</h1>
<a class="smol" href="https://indieweb.org/webring">First time seeing a webring? </a>
<br>
<br>
<div class="service-grid">
  <div class="service">
    <div class="service-header">
      <svg class="service-icon" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 16 16" width="16px" fill="currentColor">
        <path d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 c 3.332031 0 6 2.667969 6 6 s -2.667969 6 -6 6 s -6 -2.667969 -6 -6 s 2.667969 -6 6 -6 z m 0 1.875 c -0.621094 0 -1.125 0.503906 -1.125 1.125 s 0.503906 1.125 1.125 1.125 s 1.125 -0.503906 1.125 -1.125 s -0.503906 -1.125 -1.125 -1.125 z m -1.523438 3.125 c -0.265624 0.011719 -0.476562 0.230469 -0.476562 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 v 3 h -0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 3 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 h -0.5 v -4 h -2.5 c -0.007812 0 -0.015625 0 -0.023438 0 z m 0 0"/>
      </svg>
      <h2 class="service-name">About</h2>
    </div>
    <hr>
    <p>
      Within this webring, you'll find websites related to "protogens", a fictional species created by 
      <a href="https://coolkoinu.carrd.co/">KOINU</a> in the <a href="https://en.wikipedia.org/wiki/Furry_fandom">furry fandom</a>.
      Members might use them to represent themselves (this is usually referred to as a <a href="https://en.wikipedia.org/wiki/Fursona">fursona</a>), 
      have created character(s) based on the species, be an artist that draws other's protogens, or maybe they're just a really big fan of protogens!
    </p>
    <p>
      You can learn more about protogens on <a href="https://zoruniverse.info/">Zenith's Outer Reach</a>.
    </p>
  </div>
  <div class="service">
    <div class="service-header">
      <svg class="service-icon" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 16 16" width="16px" fill="currentColor">
        <path d="m 5 1 c -1.378906 0 -2.5 1.121094 -2.5 2.5 c 0 1.382812 1.121094 2.5 2.5 2.5 c 1.382812 0 2.5 -1.117188 2.5 -2.5 c 0 -1.378906 -1.117188 -2.5 -2.5 -2.5 z m 6 3 c -1.378906 0 -2.5 1.121094 -2.5 2.5 c 0 1.382812 1.121094 2.5 2.5 2.5 c 1.382812 0 2.5 -1.117188 2.5 -2.5 c 0 -1.378906 -1.117188 -2.5 -2.5 -2.5 z m -8 3 c -1.660156 0 -3 1.339844 -3 3 v 2 c 0 0.554688 0.445312 1 1 1 h 4.078125 c 0 -2.042969 1.578125 -3.734375 3.578125 -3.90625 c -0.589844 -0.535156 -0.984375 -1.257812 -1.109375 -2.042969 c -0.175781 -0.03125 -0.359375 -0.050781 -0.546875 -0.050781 z m 6 3 c -1.660156 0 -3 1.339844 -3 3 v 2 c 0 0.554688 0.445312 1 1 1 h 8 c 0.554688 0 1 -0.445312 1 -1 v -2 c 0 -1.660156 -1.335938 -3 -3 -3 z m 0 0"/>
      </svg>
      <h2 class="service-name">Members</h2>
    </div>
    <hr>
    <p>The following sites are in the ring! We're still new and always looking for members!</p>
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
  </div>
  <div class="service">
    <div class="service-header">
      <svg class="service-icon" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 16 16" width="16px" fill="currentColor">
        <path d="m 3.957031 5.988281 c -0.101562 0.003907 -0.207031 0.023438 -0.304687 0.058594 c -0.734375 0.109375 -2.652344 0.691406 -2.652344 3.953125 v 5 h 4 v -4.691406 c 0.101562 0.070312 0.203125 0.136718 0.304688 0.195312 c 0.578124 0.320313 1.15625 0.433594 1.695312 0.476563 v -0.980469 h 1 v -1 c -0.003906 0 -0.003906 0 -0.007812 0 c -0.777344 0.003906 -1.3125 -0.023438 -1.71875 -0.25 c -0.40625 -0.222656 -0.871094 -0.703125 -1.324219 -2.066406 c -0.136719 -0.429688 -0.542969 -0.714844 -0.992188 -0.695313 z m 0 0"/>
        <path d="m 12 1 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m -0.042969 4.988281 c -0.414062 0.015625 -0.777343 0.292969 -0.90625 0.695313 c -0.453125 1.363281 -0.917969 1.84375 -1.324219 2.066406 c -0.40625 0.226562 -0.945312 0.253906 -1.722656 0.25 h -0.003906 v 1 h -1 v 0.980469 c 0.167969 0.011719 0.332031 0.015625 0.492188 0.015625 c 0.003906 0 0.003906 0.003906 0.007812 0.003906 h 0.492188 h 0.011718 h 0.496094 c 0.003906 0 0.003906 -0.003906 0.003906 -0.003906 c 0.675782 -0.007813 1.433594 -0.074219 2.1875 -0.492188 c 0.105469 -0.058594 0.207032 -0.125 0.308594 -0.195312 v 4.691406 h 4 v -5 c 0 -3.261719 -1.917969 -3.84375 -2.65625 -3.953125 c -0.097656 -0.035156 -0.199219 -0.054687 -0.304688 -0.058594 c -0.027343 -0.003906 -0.054687 -0.003906 -0.082031 0 z m 0 0" fill-opacity="0.501961"/>
        <path d="m 4 1 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0"/>
      </svg>
      <h2 class="service-name">Join the Ring!</h2>
    </div>
    <hr>
    <p>
      If you already have a website, it's easy to join the ring! Just check the rules, then add the links: 
    </p>
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
        <tr>
          <td>Random (optional)</td>
          <td><code>https://protogen.chat/webring/<i>your.domain</i>/random</code></td>
        </tr>
      </thead>
    </table>
    <p>
      There's no set styling for the ring (yet!). Please check out members' sites for inspiration.
    </p>
    <p>
      Once you're ready, <a href="/contact">send a message</a> or (if you're feeling savvy) 
      <a href="https://github.com/HiiJax/protogen.chat/blob/main/src/routes/webring/webring.ts">add yourself</a> and 
      <a href="https://github.com/HiiJax/protogen.chat/pulls">open a pull request</a>!
    </p>
  </div>
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
  <div class="service">
    <div class="service-header">
      <svg class="service-icon" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 16 16" width="16px" fill="currentColor">
        <path d="m 7.96875 5.957031 c 0.542969 -0.015625 1.046875 0.488281 1.03125 1.03125 v 1 c 0.007812 0.527344 -0.472656 1 -1 1 s -1.007812 -0.472656 -1 -1 v -1 c -0.007812 -0.464843 0.355469 -0.914062 0.8125 -1 c 0.050781 -0.015625 0.101562 -0.023437 0.15625 -0.03125 z m 0.03125 4.03125 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 8 1.359375 c -0.769531 0 -1.535156 0.375 -1.941406 1.125 l -4.878906 9.0625 c -0.816407 1.515625 0.332031 3.441406 2.054687 3.441406 h 9.53125 c 1.722656 0 2.871094 -1.925781 2.054687 -3.441406 l -4.882812 -9.0625 c -0.402344 -0.75 -1.167969 -1.125 -1.9375 -1.125 z m -0.179688 2.070313 c 0.101563 -0.191407 0.257813 -0.191407 0.359376 0 l 4.878906 9.066406 c 0.144531 0.261718 0.003906 0.492187 -0.292969 0.492187 h -9.53125 c -0.296875 0 -0.4375 -0.230469 -0.296875 -0.492187 z m 0 0"/>
      </svg>
      <h2 class="service-name">Rules</h2>
    </div>
    <hr>
    <div class="rules">
    <p>All rules are subject to change</p>
    <ul>
      <li>NSFW content MUST be gated, so people that don't wanna see it don't have to.</li>
      <li>You don't necessarily need to be a protogen to join, you just need content protogen fans would enjoy (protogen art, suits, etc)</li>
      <li>Hate is not tolerated.</li>
      <li>Keeping furry weird is fine. But being rude, creepy, etc is not acceptable.</li>
    </ul>
    </div>
    <p><strong>If you see any of these rules being broken, please <a href="/contact">contact Jax</a> ASAP.</strong></p>
  </div>
  <!--<div class="service">
    <div class="service-header">
      <svg class="service-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
      </svg>
      <h2 class="service-name">The Guts...</h2>
    </div>
    <hr>
    <p>So you want to know about the inner workings of this ring? You nerd. You're cool, I like you.</p>
    <p>
      Good news for you is that all the code is <a href="https://github.com/HiiJax/protogen.chat/tree/main/src/routes/webring">on GitHub</a>.
      It's free for you to use as you'd like, as long as you follow the <a href="https://github.com/HiiJax/protogen.chat/blob/main/LICENSE">MIT license</a>
      (easy to do). It's totally custom made by Jax, without using any existing webring code or AI! It's made in <a href="https://svelte.dev/">SvelteKit</a>, 
      which actually has a routing system that made it super easy to build. Everything done here can be learned from their rather solid set of tutorials.
    </p>
    <p>
      With that being said, Jax is still a rather novice developer, so if you find something funky, please 
      <a href="https://github.com/HiiJax/protogen.chat/issues">report it</a>!
    </p>
  </div>-->
</div>