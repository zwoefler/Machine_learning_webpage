<template>
  <nav
    class="
      flex
      place-items-center
      relative
      mx-auto
      justify-between
      items-center
      bg-gray-900
      text-white
      w-screen
    "
  >
    <div class="px-5 xl:px-12 py-6 flex w-full items-center">
      <NuxtLink class="text-sm md:text-xl font-bold font-heading" to="/">
        <!-- <img class="h-9" src="logo.png" alt="logo"> -->
        Machine Learning Webpage.
      </NuxtLink>
      <!-- Nav Links -->
      <ul
        class="
          hidden
          md:flex
          px-4
          mx-auto
          font-semibold font-heading
          space-x-12
        "
      >
        <NuxtLink to="gpt-2" class="hover:text-gray-200">GPT-2</NuxtLink>
        <NuxtLink to="stablediffusion" class="hover:text-gray-200">Text to Image</NuxtLink>
      </ul>
      <div class="hidden xl:flex items-center space-x-5 items-center">
        <a class="flex items-center hover:text-gray-200" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="h-10 flex">
      <button
        class="
          focus:outline-transparent
          rounded-sm
          text-black
          bg-white
          dark:text-white dark:bg-gray-900
          rounded-md
          p-1
          hover:text-primary
          flex
          items-center
        "
        @click="toogleDarkMode"
      >
        <svg
          v-if="isDarkMode"
          id="moon"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 hover:text-gray-200"
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
        >
          <path
            fill="currentColor"
            d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
          ></path>
        </svg>
        <svg
          v-else
          id="sun"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-800"
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
        >
          <path
            fill="currentColor"
            d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
          ></path>
        </svg>
      </button>

      <a class="self-center mr-12 xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 hover:text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>
    </div>
  </nav>
</template>

<script setup>
var isDarkMode = ref(false);

function toogleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    console.log("DARKMODE");
    localStorage.theme = "dark";
  } else {
    console.log("LIGHT");
    localStorage.theme = "light";
  }
}
</script>
