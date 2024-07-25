<template>
  <div class="w-screen flex justify-center text-black">
    <div class="w-10/12">
      <Tabs />
      <div class="mt-6">
        <Patients v-if="tabSelected === 0" />
        <Staff v-if="tabSelected === 1" />
        <Rooms v-if="tabSelected === 2" />
      </div>
    </div>
  </div>
</template>
<script setup>
const tabSelected = useState("tab");
</script>
