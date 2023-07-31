<script>
    import Page from "../+page.svelte";
import PackageInfo from "./PackageInfo.svelte";
    
    const pkg = {
        name: 'svelte',
        speed: 'blazing',
        version: 4,
        website: 'https://svelte.dev'
    };
</script>
<PackageInfo
    name={pkg.name}
    speed={pkg.speed}
    version={pkg.version}
    website={pkg.website}
    />