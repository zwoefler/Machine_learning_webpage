<template>
  <div>
    <p>Welcome to Whisper</p>
    <div class="flex flex-col">
      <input type="text" placeholder="token" v-model="token">
      <input type="text" placeholder="prompt" v-model="data">
    </div>
    <button @click="query()" class="bg-gray-500">GENERATE TEXT</button>
    <div class="bg-gray-500">
      <p>RESULT:</p>
      <p>{{ generated_text }}</p>
    </div>
  </div>
</template>

<script setup>
var data = ref("")
var token = ref("")
var result = ref("")
var generated_text = ref("")
function print(){
  console.log("PRESSED")
}
const query = async () => {
  console.log(token.value, data.value)
  const response = await fetch(
      "https://api-inference.huggingface.co/models/gpt2",
      {
          headers: { Authorization: `Bearer ${token.value}` },
          method: "POST",
          body: JSON.stringify(data.value),
      }
  );
  console.log("Fetching data")
  result.value = await response.json();
  console.log("Fetched")
  generated_text.value = result.value[0]["generated_text"]
  return
}
</script>