<script>
    import Cards from "../components/cards.svelte";
    import Head from "../components/Head.svelte";
    import {db} from '$lib/database/db'
    let names = [
        "Sharma",
        "Tim Cook",
        "Steve Jobs",
        "Mark",
        "Zuckerberg",
    ];


    function handleAddItem() {
        let inp=prompt();
        if(inp=='')
        return;
        // @ts-ignore
        names = [...names, inp];
  }
    const mapIterator = db.values();
    let nam = mapIterator.next().value
    
</script>

<div class="main flex flex-col w-full min-h-screen max-h-full bg-[#F1E5D1]">
    <Head on:addItem={handleAddItem}/>
    <div
        class="cards flex flex-wrap gap-4 justify-center rounded-[24px] w-full max-h-full bg-[#EEF5FF] p-2"
    >
            {#each nam as obj}
                <Cards data={obj.name} />
            {/each}
    </div>
</div>
