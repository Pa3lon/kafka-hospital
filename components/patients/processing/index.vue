<template>
  <div class="w-64">
    <PatientsTable title="processing" :patients="patients" />
  </div>
  <button @click="test">Test</button>
</template>
<script setup>
const TOPIC = "hospital.patients-waiting";
const patients = useState("patients-processing", () => []);
const data = await WebSocketClient(TOPIC);

watch(data, (newData) => {
  console.log(JSON.parse(newData));
});
</script>
