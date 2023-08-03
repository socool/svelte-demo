<script>
    import Nested from "./nested.svelte";
    let name = "svelte";
    let gif = "public/test.gif";
    let string = `this string contains some <strong>HTML!!!</strong>`;
    
    let count = 0;
    function increment(){
        //event handler code goes here
        count += 1;
    }

    $: doubled = count * 2;

    $: {
        console.log(`the count is ${count}`);
        console.log(`this will also be logged whenever counted is changed`)
    }
    $: if(count >= 10){
        alert('count is dangerously high');
        count = 0;
    }

    let numbers = [1,2,3,4];
    function addNumber(){
        /*
        numbers.push(numbers.length+1)
        numbers = numbers;
        */
		// numbers = [...numbers,numbers.length+1]
		numbers[numbers.length] = numbers.length + 1;
    }
    $: sum = numbers.reduce((total,currentNumber)=>total + currentNumber,0);
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

<h2><a href="/">Home</a></h2>
<h3>Part 1</h3>
<h4>Logic</h4>
<nav>
    <a href="/part1">Part 1</a>    
    <a href="/part1/logic">Logic</a>
    <a href="/part1/logic/keyed">Keyed each blocks</a>
    <a href="/part1/logic/await">Await blocks</a>
</nav>
<h4>Events</h4>
<nav>
    <a href="/part1/logic/event/dom">DOM Event</a>
    <a href="/part1/logic/event/modifier">Modifier</a>
</nav>

<h2>Component</h2>
<Nested/>

<h2>Html Tag</h2>
<p>{string}</p>
<p>{@html string}</p>

<h2>Button</h2>
<button on:click={increment}>
    Clicked {count}
    {count === 1 ? 'time' : 'times'}
</button>

<h2>Declarations</h2>
<p>{count} doubled is {doubled}</p>

<h2>Statements</h2>

<h2>Updating arrays and objects</h2>
<p>{numbers.join(' + ')} = {sum}</p>
<button on:click={addNumber}>
    Add a number
</button>

<Nested answer={42}/>