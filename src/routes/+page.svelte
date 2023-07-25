<script>
    import Nested from "./nested.svelte";
    let name = "svelte";
    let gif = "public/test.gif";
</script>
<style>
	/* Write your CSS here */
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
<h1>Welcome to SvelteKit</h1>
<p>{name.toUpperCase()}</p>
<Nested/>
<img src={gif} alt="simpson dance">