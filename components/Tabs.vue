<script setup>
const tabSelected = useState("tab", () => 0);
const items = [{ label: "Patients" }, { label: "Staff" }, { label: "Rooms" }];
</script>

<template>
  <UTabs v-model="tabSelected" :items="items"> </UTabs>
</template>
