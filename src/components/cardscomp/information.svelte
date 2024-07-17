<script>
    export let heading="Information";
    export let name= "Ayush Sharma"
    export let email = "sharma@gmail.com"
</script>

<div class="flex flex-col w-full h-auto mb-4 ">
    <div class="header bg-[#F1EAFF] w-full px-[2px] ">
        <p class="text-[12px] font-bold">{heading}</p>
    </div>
    <div class="flex flex-col break-all">
        <p class="text-[9px]">Name  :  {name}</p>
        <p class="text-[9px]">Email : {email}</p>
    </div>
</div>