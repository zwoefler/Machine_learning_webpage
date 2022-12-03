<template>
  <div>
    <p class="text-xl">Welcome to GPT-2</p>

    <div class="">
      <div class="flex w-full">
        <input
          class="w-full"
          type="text"
          placeholder="Paste your Huggingface token"
          v-model="token"
        />
      </div>
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
          >
            Generate Text
          </button>
        </template>
      </Textarea>
    </div>

    <button @click="query()" class="bg-blue-500 rounded p-2">
      GENERATE TEXT
    </button>
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