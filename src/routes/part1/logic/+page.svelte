<script>
    let count = 0;
    function increment(){
        count += 1;
    }

    const colors = ['red','orange','yellow','green','blue','indigo','vilolet'];
    let selected = colors[0];
</script>

<button on:click={increment}>
    Clicked {count}
    {count == 1 ? 'time' : 'times'}
</button>

{#if count > 10}
    <p>{count} is greater than 10</p>
{:else if count < 5}
    <p>{count} is less than 5</p>
{:else}
    <p>{count} is between 0 and 10</p>
{/if}

<div>
    <div>
        {#each colors as color,i}
            <button
                aria-current={selected === color}
                aria-label={color}
                style="background: {color}"
                on:click={()=>selected = color}
            >
                {i+1}
            </button>
        {/each}
    </div>
</div>

<style>
    h1 {
        transition: color 0.2s;
    }
    
    div{
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-gap: 5px;
        max-width: 400px;
    }

    button{
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--color,#fff);
        transform: translate(-2px,-2px);
        filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
        transition: all 0.1s;
    }

    button[aria-current="true"]{
        transform: none;
        filter: none;
        box-shadow: insert 3px 3px 4px rgba(0,0,0,0.2);
    }
</style>