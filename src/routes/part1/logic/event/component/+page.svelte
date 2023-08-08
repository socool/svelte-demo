<script>
    import Inner from './Inner.svelte'
    import Outer from './Outer.svelte';

    function handleMessage(event){
        alert(event.detail.text);
    }
</script>
<p>Inner</p>
<Inner on:message={handleMessage}/>
<p>Outer</p>
<Outer on:message={handleMessage}/>