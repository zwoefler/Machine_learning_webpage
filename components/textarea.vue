<template>
  <!-- IPUT MESSAGE BOX -->
  <div class="mx-auto">
    <label
      for="prompt"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      ><slot name="label"></slot
    ></label>

    <div class="relative">
      <slot name="textarea"></slot>
      <div
        class="
          flex
          items-center
          justify-between
          p-0.5
          outline-none
          border-b border-l border-r border-gray-300
          rounded-b-lg
          focus:ring-1 focus:ring-gray-400
        "
      >
        <slot name="buttons"></slot>
        <div class="flex items-center">
          <slot name="submit"></slot>
        </div>
      </div>
    </div>
  </div>
</template>