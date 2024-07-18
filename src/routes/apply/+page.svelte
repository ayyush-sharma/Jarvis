<script>
    export let data;
</script>

<div class="flex justify-center mt-7">
    <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
        <h2 class="text-2xl font-bold pb-5">Apply for Job</h2>
    <form method="POST">
        <div class="mb-4">
            <label for="name" class="block mb-2 text-sm font-medium">Your name</label>
            <input
            type="text" name="name"
            id="name"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="Andrew Jackson"
            required
            value=""
            >
        </div>
        <div class="mb-4">
            <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
            <input
            type="email" name="email"
            id="email"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
            placeholder="andrew@mail.com"
            required
            value=""
            >
        </div>
        <div class="mb-4">
        <label for="skills" class="block mb-2 text-sm font-medium">Your One Skill</label>
        <input
          type="text" name="skills"
          id="skills"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="Svelte"
          required
          value=""
        >
      </div>
      <div>
          <p class="text-red-500 pb-5"></p>
        </div>
        <div class="flex items-center justify-between mb-4">
            <button
          type="submit"
          class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
          >
          Submit
        </button>
        <div class="flex items-center text-sm">
            <p>Already have an account?</p>
            <p class="underline cursor-pointer ml-1">Sign in</p>
        </div>
    </div>
</form>
</div>
</div>

<ul class="todos">
    {#each data.result as todo (todo.id)}
        <li>
            {todo.name}
            {todo.skills}
        </li>
    {/each}
</ul>