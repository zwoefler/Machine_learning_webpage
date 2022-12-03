<template>
  <div class="space-y-4 divide-y divide-slate-600">
    <p class="text-xl">Welcome to GPT-2</p>
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
            <isShownButton @click="toggleIsShown" />
          </div>
        </div>
      </div>

      <Textarea>
        <template #label>
          Your Prompt
        </template>
        <template #textarea>
          <textarea
            id="prompt"
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
            v-model="prompt"
          ></textarea>
        </template>
        <template #buttons>
          <div class="flex space-x-2 text-gray-200 ml-2 items-center">
            <div class="h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </div>
            <div class="h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div class="h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
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

      <Textarea>
        <template #label>Generated Text</template>
        <template #textarea>
          <textarea
            rows="12"
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
            :class="{ 'animate-pulse': loadingGeneratedText }"
            placeholder="Generated Text..."
            v-model="generated_text"
          ></textarea>
        </template>
      </Textarea>
  </div>
</template>


<script setup>
var prompt = ref("");
var token = ref("");
var result = ref("");
var isShown = ref(false);
var loadingGeneratedText = ref(false)

function toggleIsShown() {
  isShown.value = !isShown.value;
}

var generated_text = ref("");
function print() {
  console.log("PRESSED");
}
const query = async () => {
  loadingGeneratedText.value = true
  const response = await fetch(
    "https://api-inference.huggingface.co/models/gpt2",
    {
      headers: { Authorization: `Bearer ${token.value}` },
      method: "POST",
      body: JSON.stringify(prompt.value),
    }
  );
  result.value = await response.json();
  loadingGeneratedText.value = false
  generated_text.value = result.value[0]["generated_text"];
  return;
};
</script>