<template>
  <div class="w-64">
    <PatientsTable title="processing" :patients="patients" />
  </div>
</template>
<script setup>
const TOPIC = "hospital.patients-waiting";

const patients = useState("patients-processing", () => []);
const facilitators = useState("facilitators", () => []);
const data = await WebSocketClient(TOPIC);
const processingWaiting = ref([]);

watch(data, (newData) => {
  const data = JSON.parse(newData);
  const newPatient = JSON.parse(data.value);
  processPatient(newPatient);
});

const processPatient = (newPatient) => {
  if (processingWaiting.length > 0) {
    processingWaiting.value.push(newPatient);
    return;
  } else {
    const facilitator = getAvaialbleFacilitator();
    if (facilitator) {
    } else {
      processingWaiting.value.push(newPatient);
    }
  }
};

const getAvaialbleFacilitator = () => {
  return facilitators.value.find((facilitator) => {
    return facilitator.status === "available";
  });
};
</script>
