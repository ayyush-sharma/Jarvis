<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function addItem() {
    dispatch('addItem');
  }
</script>


<header class="flex flex-row justify-between items-center w-full h-14 mb-6 bg-[#F1E5D1] rounded-md px-4">
    <div class="logo w-[12%]">
        <img src="https://www.ecozensolutions.com/wp-content/uploads/2020/01/Ecozen-Logo.png" alt="Company Logo">
    </div>
    <div class="logo flex shrink">
        <h1 class="font-bold text-[27px] opacity-70 text-black-200 hover:opacity-100">Resume Checker</h1>
    </div>
    <div class="menu flex flex-row">
        <ul class="">
            <button class="p-3 bg-blue-700 w-[50%] text-white rounded" on:click={addItem}>Add User</button>
            <a class="ml-2" href="/">Home</a>
            <a class="ml-2" href="/">About</a>
            <a class="ml-2" href="/formfile">Logout</a>
        </ul>
    </div>
</header>

