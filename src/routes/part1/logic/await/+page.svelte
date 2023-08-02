<script>
    import {getRandomNumber} from './util.js';
    let promise = getRandomNumber();

    function handleClick(){
        promise = getRandomNumber();
    }
</script>

<button on:click={handleClick}>
    generate random number
</button>

{#await promise}
    <p>...waiting</p>
{:then number} 
    <p>Then number is {number}</p>
{:catch error}
    <p style="color: red">{error.messge}</p>
{/await}