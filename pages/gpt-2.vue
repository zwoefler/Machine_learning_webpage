<template>
  <div>
    <p class="text-xl">Welcome to GPT-2</p>

    <div class="">
      <!--  -->
      <div class="space-y-2">
        <label class="block font-medium text-sm mx-auto" for="hug_token">
          Huggingface Token:
        </label>
        <div
          class="
            relative
            focus-within:text-gray-900
            dark:focus-within:text-gray-800
          "
        >
          <div
            aria-hidden="true"
            class="
              absolute
              inset-y-0
              flex
              items-center
              px-3
              pointer-events-none
            "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>

          <input
            class="
              pl-11
              text-gray-800
              pr-4 pr-11
              py-2
              border-gray-600
              rounded-md
              focus:border-gray-400 focus:ring focus:ring-gray-800
              ring-gray-400 ring
              focus:ring-offset-2 focus:ring-offset-white
              dark:border-gray-600
              dark:bg-primary-darker
              dark:focus:ring-offset-dark-eval-1
              block
              w-full
            "
            id="hug_token"
            name="hug_token"
            required="required"
            placeholder="Huggingface Access Token"
            :type="isShown ? 'text' : 'password'"
            v-model="token"
          />

          <div class="absolute right-0 z-30 inset-y-1 flex items-center px-4">
            <isShownButton @click="toggleIsShown"/>
          </div>

        </div>
      </div>


      <!--  -->
      <Textarea>
        <template #textarea>
          <textarea
            id="message"
            rows="4"
            class="
              block
              p-2.5
              w-full
              text-sm text-gray-900
              bg-gray-50
              rounded-t-lg
              border border-gray-300
              focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Your message..."
            v-model="data"
          ></textarea>
        </template>
        <template #submit>
          <button
            class="
              bg-blue-500
              px-2
              py-0.5
              rounded-lg
              text-white
              border border-blue-700
            "
            @click="query()"
          >
            Generate Text
          </button>
        </template>
      </Textarea>
    </div>

    <div class="">
      <p>RESULT:</p>
      <p class="">{{ generated_text }}</p>
    </div>
  </div>
</template>


<script setup>
var data = ref("");
var token = ref("");
var result = ref("");
var isShown = ref(false);

function toggleIsShown(){
  isShown.value = !isShown.value
}

var generated_text = ref("");
function print() {
  console.log("PRESSED");
}
const query = async () => {
  console.log(token.value, data.value);
  const response = await fetch(
    "https://api-inference.huggingface.co/models/gpt2",
    {
      headers: { Authorization: `Bearer ${token.value}` },
      method: "POST",
      body: JSON.stringify(data.value),
    }
  );
  console.log("Fetching data");
  result.value = await response.json();
  console.log("Fetched");
  generated_text.value = result.value[0]["generated_text"];
  return;
};
</script>