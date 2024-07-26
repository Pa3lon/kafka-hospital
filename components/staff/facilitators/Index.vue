<template>
  <div class="w-80">
    <StaffTable title="Facilitators" :staff="staff" />
    <UButton class="w-full mt-2 justify-center" color="blue" @click="addStaff">
      Add Facilitator
    </UButton>
  </div>
</template>

<script setup>
import staffGenerator from "~/utils/staffGenerator";

const staff = useState("facilitators", () => []);

const addStaff = () => {
  const newStaff = staffGenerator("facilitator");
  staff.value.push(newStaff);
};
</script>
