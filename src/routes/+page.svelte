<script>
    import Nested from "./nested.svelte";
    let name = "svelte";
    let gif = "public/test.gif";
    let string = `this string contains some <strong>HTML!!!</strong>`;
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
<img src={gif} alt="simpson dance">

<h2>Component</h2>
<Nested/>

<h2>Html Tag</h2>
<p>{string}</p>
<p>{@html string}</p>