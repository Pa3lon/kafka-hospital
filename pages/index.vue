<template>
  <div class="w-screen flex justify-center text-black">
    <div class="w-8/12">
      <Tabs />
      <div>
        {{ tabSelected }}
      </div>
    </div>
  </div>
</template>
<script setup>
const tabSelected = useState("tab", () => 2);
</script>
