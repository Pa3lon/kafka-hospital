<template>
  <div class="w-64">
    <PatientsTable title="processing" :patients="patients" />
  </div>
</template>
<script setup>
const patients = useState("patients-processing", () => []);
</script>
