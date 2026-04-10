<svelte:head>
  <title>services | protogen.chat</title>
</svelte:head>

<h1>Services</h1>
<p>
  protogen<span class="accent">.</span>chat provides a variety of free services, just DM 
  <a href="https://bsky.app/profile/protogen.chat">this Bluesky account</a> 
  if there's one you'd like to register for!
</p>
<div class="service-grid">
  <div class="service">
    <div class="service-header">
      <div class="service-icon">*.</div>
      <h2 class="service-name">Subdomains</h2>
    </div>
    <hr>
    <p>You can get your own <code>*.protogen.chat</code> subdomain!</p>
    <p>It's currently best used for Bluesky handles, but hosting other content behind them might be allowed with approval.</p>
  </div>
  <div class="service">
    <div class="service-header">
      <svg role="img" class="service-icon" fill="var(--accent-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"/></svg>
      <h2 class="service-name">PDS</h2>
      <a class="serice-status" href="https://status.protogen.chat"><img src="https://status.protogen.chat/api/badge/7/status" alt="pds status indicator"></a>
    </div>
    <hr>
    <p></p>
    <p>Store your Bluesky account and other atproto data on our Personal Data Server, <a href="https://protogen.at">protogen.at</a>.</p>
    <p>Also, instead of a <code>*.bsky.social</code> handle, you'll get a shiny new <code>*.protogen.at</code> one! Alternatively, you always have the option of using a custom (sub)domain.</p>
  </div>
  <div class="service">
    <div class="service-header">
      <svg role="img" class="service-icon" fill="var(--accent-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Forgejo</title><path d="M16.7773 0c1.6018 0 2.9004 1.2986 2.9004 2.9005s-1.2986 2.9004-2.9004 2.9004c-1.0854 0-2.0315-.596-2.5288-1.4787H12.91c-2.3322 0-4.2272 1.8718-4.2649 4.195l-.0007 2.1175a7.0759 7.0759 0 0 1 4.148-1.4205l.1176-.001 1.3385.0002c.4973-.8827 1.4434-1.4788 2.5288-1.4788 1.6018 0 2.9004 1.2986 2.9004 2.9005s-1.2986 2.9004-2.9004 2.9004c-1.0854 0-2.0315-.596-2.5288-1.4787H12.91c-2.3322 0-4.2272 1.8718-4.2649 4.195l-.0007 2.319c.8827.4973 1.4788 1.4434 1.4788 2.5287 0 1.602-1.2986 2.9005-2.9005 2.9005-1.6018 0-2.9004-1.2986-2.9004-2.9005 0-1.0853.596-2.0314 1.4788-2.5287l-.0002-9.9831c0-3.887 3.1195-7.0453 6.9915-7.108l.1176-.001h1.3385C14.7458.5962 15.692 0 16.7773 0ZM7.2227 19.9052c-.6596 0-1.1943.5347-1.1943 1.1943s.5347 1.1943 1.1943 1.1943 1.1944-.5347 1.1944-1.1943-.5348-1.1943-1.1944-1.1943Zm9.5546-10.4644c-.6596 0-1.1944.5347-1.1944 1.1943s.5348 1.1943 1.1944 1.1943c.6596 0 1.1943-.5347 1.1943-1.1943s-.5347-1.1943-1.1943-1.1943Zm0-7.7346c-.6596 0-1.1944.5347-1.1944 1.1943s.5348 1.1943 1.1944 1.1943c.6596 0 1.1943-.5347 1.1943-1.1943s-.5347-1.1943-1.1943-1.1943Z"/></svg>
      <a href="https://git.protogen.chat"><h2 class="service-name">Forgejo</h2></a>
      <a class="serice-status" href="https://status.protogen.chat"><img style="object-fit: cover;" src="https://status.protogen.chat/api/badge/1/status" alt="forgejo status indicator"></a>
    </div>
    <hr>
    <p>A self-hosted GitHub alternative, hopefully federated one day with <a href="https://forgefed.org/">ForgeFed</a>. A basic runner is available to use as well.
    </p>
  </div>
  <div class="service">
    <div class="service-header">
      <svg role="img" class="service-icon" viewBox="0 0 67.733334 67.733329" xmlns="http://www.w3.org/2000/svg">
        <title>Webring</title>
        <path fill="var(--accent-color)"
          d="m 71.515982,62.969097 c 0,11.337774 -9.191082,20.528856 -20.528857,20.528856 -11.337774,0 -20.528856,-9.191082 -20.528856,-20.528856 0,-11.337774 9.191082,-20.528856 20.528856,-20.528856 11.337775,0 20.528857,9.191082 20.528857,20.528856 z m 46.985938,0 c 0,11.337774 9.19108,20.528856 20.52886,20.528856 11.33777,0 20.52885,-9.191082 20.52885,-20.528856 0,-11.337774 -9.19108,-20.528856 -20.52885,-20.528856 -11.33778,0 -20.52886,9.191082 -20.52886,20.528856 z M 71.515982,209.01563 c 0,-11.33778 -9.191082,-20.52886 -20.528857,-20.52886 -11.337774,0 -20.528856,9.19108 -20.528856,20.52886 0,11.33777 9.191082,20.52885 20.528856,20.52885 11.337775,0 20.528857,-9.19108 20.528857,-20.52885 z m 46.985938,0 c 0,-11.33778 9.19108,-20.52886 20.52886,-20.52886 11.33777,0 20.52885,9.19108 20.52885,20.52886 0,11.33777 -9.19108,20.52885 -20.52885,20.52885 -11.33778,0 -20.52886,-9.19108 -20.52886,-20.52885 z"
          transform="matrix(0.32220904,0,0,0.32220904,3.2539254,-9.9513033)" />
        <path fill="var(--accent-color)"
          d="m 52.157282,107.95235 c 0,10.71503 -8.686251,19.40128 -19.401285,19.40128 -10.715034,0 -19.401285,-8.68625 -19.401285,-19.40128 0,-10.715037 8.686251,-19.401288 19.401285,-19.401288 10.715034,0 19.401285,8.686251 19.401285,19.401288 z m 119.024218,0 c 0,10.71503 8.68625,19.40128 19.40128,19.40128 10.71504,0 19.40129,-8.68625 19.40129,-19.40128 0,-10.715037 -8.68625,-19.401288 -19.40129,-19.401288 -10.71503,0 -19.40128,8.686251 -19.40128,19.401288 z"
          transform="matrix(0.34093532,0,0,0.34093532,-4.2053705,-2.9381011)" />
        <path stroke="var(--accent-color)" style="stroke-width:3;"
          d="M 7.7605272,25.970003 C 7.938346,23.657778 8.1161613,21.345599 9.0070007,19.502072 9.8978401,17.658545 11.501633,16.283818 13.105457,14.909063 M 59.97281,25.970003 C 59.794991,23.657778 59.617176,21.345599 58.726336,19.502072 57.835497,17.658545 56.231704,16.283818 54.62788,14.909063 M 7.7605272,41.763327 c 0.1778188,2.312225 0.3556341,4.624404 1.2464735,6.467931 0.8908394,1.843527 2.4946323,3.218255 4.0984563,4.593009 M 59.97281,41.763327 c -0.177819,2.312225 -0.355634,4.624404 -1.246474,6.467931 -0.890839,1.843527 -2.494632,3.218255 -4.098456,4.593009"/>
        <path stroke="var(--accent-color)" style="stroke-width:3;"
          d="m 26.458333,60.854167 c 2.469443,0.881944 4.938839,1.763871 7.408334,1.799414 2.469494,0.03554 4.938889,-0.7753 7.408333,-1.58616 M 26.458333,6.8791633 c 2.469443,-0.8819438 4.938839,-1.7638708 7.408334,-1.7994139 2.469494,-0.035543 4.938889,0.7753003 7.408333,1.5861599"/>
      </svg>
      <a href="/webring"><h2 class="service-name">ProtogenRing</h2></a>
    </div>
    <hr>
    <p>A series of protogens' (and protogen fans') websites all linking to each other to form a looping ring!</p>
  </div>
  <div class="service">
    <h2>Coming Soon</h2>
    <hr>
    <p>Tangled Knot - maybe</p>
    <p>Fluxer - when/if federation is good</p>
  </div>
</div>