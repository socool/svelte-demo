<script>
    import Inner from './Inner.svelte'
    import Outer from './Outer.svelte';

    function handleMessage(event){
        alert(event.detail.text);
    }
</script>

<Inner on:message={handleMessage}/>

<Outer on:message={handleMessage}/>