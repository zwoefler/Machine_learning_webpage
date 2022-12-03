<template>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>
	<script defer src="https://unpkg.com/alpinejs@3.9.0/dist/cdn.min.js"></script>

<div x-data="{showen:true}" class='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 '>
    <div class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
        <div class='max-w-md mx-auto  space-y-6'>
            <div  x-show="showen">

                <div class="space-y-2 text-gray-700" x-data="{isshow:false}">
                <label class="block font-medium text-sm   mx-auto " for="password">
    password
</label>                <div class="relative  focus-within:text-gray-900 dark:focus-within:text-gray-800 ">
    <div aria-hidden="true" class="absolute inset-y-0 flex items-center px-4 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
</svg>
    </div>
    <input class="pl-11 text-gray-800 pr-4 pr-11 py-2 border-gray-600 rounded-md focus:border-gray-400 focus:ring
focus:ring-gray-800 ring-gray-400 ring focus:ring-offset-2 focus:ring-offset-white dark:border-gray-600 dark:bg-primary-darker
 dark:focus:ring-offset-dark-eval-1 block w-full" id="password" x-bind:type="isshow ? 'text' : 'password'" name="password" required="required" autocomplete="new-password" placeholder="password" type="password">


    <div class="absolute right-0 z-30 inset-y-1 flex items-center px-4 ">
        <button type="button" @click="isshow=!isshow" class="z-30 ">
                                <svg x-show="!isshow" aria-hidden="true" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
</svg>                                <svg x-show="isshow" aria-hidden="true" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="display: none;">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
</svg>                            </button>
    </div>
    </div>


            </div>
            </div>

    </div>

    </div>
</div>

</template>