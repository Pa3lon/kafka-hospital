<script setup>
const tabSelected = useState("tab", () => 1);
const items = [{ label: "Patients" }, { label: "Staff" }, { label: "Rooms" }];
</script>

<template>
  <UTabs v-model="tabSelected" :items="items"> </UTabs>
</template>
