<script>
    import { enhance } from "$app/forms";
    import { onMount } from "svelte";

    /**@type {SVGAnimateElement}*/
    let bootAnim;

    /**@type {HTMLAudioElement}*/
    let bootSound;

    onMount(() => {
        bootSound = new Audio('boot.opus');
    });

    function startBoot() {
        bootAnim.beginElement();
        const sound = /** @type {HTMLAudioElement} */ (bootSound.cloneNode());
        sound.play();
    }
</script>

<svelte:head>
    <title>home | protogen.chat</title>
</svelte:head>

<div class="hero">
    <h1>Welcome, Protogens!</h1>
    
</div>
<div class="proto-face-holder flicker-in">
    <svg
        onclick={startBoot}
        class="proto-face"
        viewBox="226.32642 175.08014 827.34717 375.84607"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path id="proto-eyes"
            style="fill:currentColor;stroke:currentColor;stroke-width:16.1197;stroke-linecap:butt;stroke-linejoin:round;"
            d="m 234.38608,240.37577 c 24.5032,-16.5956 78.46731,99.64728 275.3641,96.70157 -132.97423,17.63342 -250.08281,-54.825 -275.3641,-96.70157 z m 811.22782,0 c -24.5032,-16.5956 -78.46734,99.64728 -275.36413,96.70157 132.97423,17.63342 250.08277,-54.825 275.36407,-96.70157 z">
            <animate 
                bind:this={bootAnim} 
                id="proto-boot"
                attributeName="d"
                begin="indefinite"
                dur="0.3s"
                from="m 234.38608,240.37577 c 24.5032,-16.5956 78.46731,99.64728 275.3641,96.70157 -132.97423,17.63342 -250.08281,-54.825 -275.3641,-96.70157 z m 811.22782,0 c -24.5032,-16.5956 -78.46734,99.64728 -275.36413,96.70157 132.97423,17.63342 250.08277,-54.825 275.36407,-96.70157 z"
                to="m 234.38608,240.37577 c 64.23546,-77.18025 211.34696,-102.97062 275.3641,96.70157 -132.97423,17.63342 -250.08281,-54.825 -275.3641,-96.70157 z m 811.22782,0 c -64.23543,-77.18025 -211.34693,-102.97062 -275.36407,96.70157 132.97423,17.63342 250.08277,-54.825 275.36407,-96.70157 z"
                fill="freeze" />
        </path>
        <path id="proto-mouth"
            style="fill:none;stroke:currentColor;stroke-width:12.7181;stroke-linecap:round;stroke-linejoin:round;"
            d="m 284.2935,382.47733 84.4921,106.63523 c 12.19242,-26.46984 24.42329,-36.99579 40.2599,-47.02668 l 70.85543,102.48194 c 12.60287,-28.86446 29.57675,-48.70057 44.96206,-57.39729 19.36568,3.81975 91.88596,7.99763 116.16672,7.96716 m 354.6768,-112.66036 -84.4921,106.63523 c -12.19242,-26.46984 -24.42329,-36.99579 -40.2599,-47.02668 l -70.85543,102.48194 c -12.60287,-28.86446 -29.57675,-48.70057 -44.96206,-57.39729 -19.36568,3.81975 -91.88596,7.99763 -116.16672,7.96716"/>
        <path id="proto-nose"
            style="fill:currentColor;stroke:currentColor;stroke-width:6.29291;stroke-linecap:round;stroke-linejoin:round;"
            d="m 609.37335,397.44539 -15.39148,-13.41786 20.96793,2.36776 z m 61.25331,0 15.39148,-13.41786 -20.96793,2.36776 z"/>
    </svg>
</div>
<div class="hero">
    <div class="smol"><a href="https://bsky.app/profile/chatgpthvh.bsky.social/post/3mgzuei2qes2o">I was booped too many times!</a></div>
</div>