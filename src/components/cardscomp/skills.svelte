<script>
    export let heading="Skills";
    export const btn = ["Angular","Excel","HTML","Spring Boot","Java"]
</script>

<div class="flex flex-col w-full h-auto mb-2">
    <div class="header bg-[#F1EAFF] w-full px-[2px] ">
        <p class="text-[12px] font-bold">{heading}</p>
    </div>
    <div class="flex flex-row flex-wrap break-all">
        {#each btn as btname}
        <button class="text-[10px]  bg-blue-200 text-black m-1">{btname}</button>
        {/each}
    </div>
</div>