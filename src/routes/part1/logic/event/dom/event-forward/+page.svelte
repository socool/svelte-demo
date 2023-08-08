<script>
    import BigRedButton from "./BigRedButton.svelte";
    
    function handleClick(){
        alert("Button Clicked");
    }
</script>

<BigRedButton on:click={handleClick}/>